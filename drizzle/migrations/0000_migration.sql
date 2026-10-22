CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text NOT NULL,
  budget text NOT NULL,
  timeline text,
  message text NOT NULL,
  locale text NOT NULL DEFAULT 'fr',
  consent boolean NOT NULL DEFAULT false
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a contact request"
ON public.contact_submissions FOR INSERT TO anon, authenticated
WITH CHECK (
  consent = true
  AND char_length(name) BETWEEN 1 AND 120
  AND char_length(company) BETWEEN 1 AND 160
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(message) BETWEEN 1 AND 3000
  AND (phone IS NULL OR char_length(phone) <= 40)
  AND (timeline IS NULL OR char_length(timeline) <= 120)
  AND locale IN ('fr','pt','en')
);