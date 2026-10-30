import { z } from 'zod';

export const interests = ['wildlife', 'landscapes', 'food-cities', 'comfort', 'adventure'] as const;

export const enquirySchema = z.object({
  budgetFit: z.literal(true),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(''),
  country: z.string().trim().length(2),
  dates: z.string().trim().max(200).optional().default(''),
  travellers: z.string().trim().max(10).optional().default(''),
  interests: z.array(z.enum(interests)).optional().default([]),
  contactPref: z.enum(['email', 'phone']),
  notes: z.string().trim().max(4000).optional().default(''),
  topic: z.string().max(200).optional(),
  journeyId: z.string().max(80).optional(),
  specialistId: z.string().max(80).optional(),
  season: z.enum(['summer', 'winter']).optional(),
  locale: z.enum(['en', 'fr']),
  company: z.string().max(0).optional(), // honeypot: must stay empty
});
export type Enquiry = z.infer<typeof enquirySchema>;

export const itinerarySchema = z.object({
  journeyId: z.string().min(1).max(80),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  country: z.string().trim().length(2),
  locale: z.enum(['en', 'fr']),
  company: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email().max(200),
  locale: z.enum(['en', 'fr']).optional(),
  company: z.string().max(0).optional(),
});
