CREATE TABLE public.formularze (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  imie text NOT NULL,
  email text NOT NULL,
  telefon text,
  rodzaj_strony text,
  wiadomosc text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.formularze TO anon;
GRANT SELECT, INSERT ON public.formularze TO authenticated;
GRANT ALL ON public.formularze TO service_role;

ALTER TABLE public.formularze ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form" ON public.formularze FOR INSERT TO anon, authenticated WITH CHECK (true);