import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, Users, Mail, Phone, MessageSquare, RefreshCw } from "lucide-react";
import { format } from "date-fns";

interface Booking {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  booking_date: string;
  booking_time: string;
  guest_count: number;
  special_requests: string | null;
  status: string;
  created_at: string;
}

export default function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const { toast } = useToast();

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("booking_date", { ascending: true })
        .order("booking_time", { ascending: true });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast({
        title: "Error",
        description: "Failed to load bookings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Booking marked as ${status}`,
      });

      fetchBookings();
    } catch (error) {
      console.error("Error updating booking:", error);
      toast({
        title: "Error",
        description: "Failed to update booking",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "no-show":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-display mb-2">
              Admin <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Manage all reservations</p>
          </div>
          <Button onClick={fetchBookings} disabled={loading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Bookings</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="no-show">No Show</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {["all", "pending", "confirmed", "completed", "cancelled"].map((status) => (
            <Card key={status} className="p-4 bg-card/50 backdrop-blur-sm">
              <div className="text-2xl font-display text-primary">
                {status === "all" ? bookings.length : bookings.filter((b) => b.status === status).length}
              </div>
              <div className="text-sm text-muted-foreground capitalize">{status}</div>
            </Card>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading bookings...</div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No bookings found</div>
          ) : (
            filteredBookings.map((booking) => (
              <Card key={booking.id} className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-display text-foreground mb-1">
                          {booking.customer_name}
                        </h3>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Booked {format(new Date(booking.created_at), "MMM d, yyyy")}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {format(new Date(booking.booking_date), "EEEE, MMMM d, yyyy")}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {booking.booking_time}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        {booking.guest_count} {booking.guest_count === 1 ? "Guest" : "Guests"}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        {booking.customer_email}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground md:col-span-2">
                        <Phone className="w-4 h-4 text-primary" />
                        {booking.customer_phone}
                      </div>
                    </div>

                    {booking.special_requests && (
                      <div className="flex gap-2 text-sm">
                        <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-muted-foreground block mb-1">Special Requests:</span>
                          <span className="text-foreground">{booking.special_requests}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex lg:flex-col gap-2 lg:min-w-[140px]">
                    <Button
                      size="sm"
                      onClick={() => updateBookingStatus(booking.id, "confirmed")}
                      disabled={booking.status === "confirmed"}
                      className="flex-1 lg:w-full bg-green-500/20 text-green-400 hover:bg-green-500/30"
                    >
                      Confirm
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => updateBookingStatus(booking.id, "completed")}
                      disabled={booking.status === "completed"}
                      variant="outline"
                      className="flex-1 lg:w-full"
                    >
                      Complete
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => updateBookingStatus(booking.id, "cancelled")}
                      disabled={booking.status === "cancelled"}
                      variant="outline"
                      className="flex-1 lg:w-full text-red-400 hover:text-red-300"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
