import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact Submission Route
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const submission = await storage.createContactSubmission(input);
      
      // Mock email sending log as requested
      console.log(`Sending email to kallepalli.satyadatta@gmail.com...`);
      console.log(`From: ${input.name} <${input.email}>`);
      console.log(`Subject: New Contact Inquiry from Phrenix Website`);
      console.log(`Content: ${input.message}`);
      if (input.phone) console.log(`Phone: ${input.phone}`);
      
      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
