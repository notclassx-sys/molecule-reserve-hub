-- Fix critical security vulnerability: Remove public access to customer PII
-- Drop the existing insecure SELECT policy
DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;

-- For now, remove all SELECT access until authentication is implemented
-- This prevents unauthorized access to customer personal information
-- Staff will need to authenticate before viewing bookings

-- Keep the INSERT policy for customer bookings
-- (The existing "Anyone can create bookings" policy remains active)