"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import emailjs from 'emailjs-com'

const contactInfo = [
    {
        icon: MapPin,
        title: "Head Office",
        details: ["55  river niger Street Amcssco  Estate galadimawa, Abuja, Nigeria"],
    },
    {
        icon: Phone,
        title: "Phone",
        details: ["+2348057981311 (WhatsApp)"],
    },
    {
        icon: Mail,
        title: "Email",
        details: ["beulahwalkofhope@gmail.com"],
    },
    {
        icon: Clock,
        title: "Office Hours",
        details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    },
]

export default function ContactContent() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    // Initialize EmailJS on component mount
    useEffect(() => {
        // Replace 'YOUR_SERVICE_ID' with your actual EmailJS service ID
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        try {
            // Send email using EmailJS
            // Template variables should match your EmailJS template
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'beulahwalkofhope@gmail.com',
                }
            );

            setSubmissionStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSubmissionStatus("error");
            console.error('EmailJS error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main>
            {/* Contact Form and Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">Send Us a Message</h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name *</Label>
                                        <Input id="firstName" placeholder="Enter your first name" required value={formData.firstName} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name *</Label>
                                        <Input id="lastName" placeholder="Enter your last name" required value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input id="email" type="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="08057981311" value={formData.phone} onChange={handleChange} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject *</Label>
                                    <select
                                        id="subject"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="volunteer">Volunteer Opportunities</option>
                                        <option value="donation">Donation Information</option>
                                        <option value="partnership">Partnership Opportunities</option>
                                        <option value="programs">Program Information</option>
                                        <option value="media">Media Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} required value={formData.message} onChange={handleChange} />
                                </div>

                                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                                {submissionStatus === "success" && (
                                    <p className="text-green-500">Message sent successfully!</p>
                                )}
                                {submissionStatus === "error" && (
                                    <p className="text-red-500">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <Card key={info.title}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <info.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-2">{info.title}</h3>
                                                    {info.details.map((detail, index) => {
                                                        // Check if it's an email address
                                                        if (typeof detail === "string" && detail.includes("@")) {
                                                            return (
                                                                <a
                                                                    key={index}
                                                                    href={`mailto:${detail}`}
                                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                                >
                                                                    {detail}
                                                                </a>
                                                            );
                                                        }
                                                        // Check if it's a phone number (starts with digits and contains numbers)
                                                        if (typeof detail === "string" && /^\d/.test(detail)) {
                                                            // Extract just the numbers for the tel link
                                                            const phoneNumber = detail.replace(/\D/g, '');
                                                            return (
                                                                <a
                                                                    key={index}
                                                                    href={`tel:${phoneNumber}`}
                                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                                >
                                                                    {detail}
                                                                </a>
                                                            );
                                                        }
                                                        // Default case for other text
                                                        return (
                                                            <p key={index} className="text-sm text-muted-foreground">
                                                                {detail}
                                                            </p>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section removed per request */}
        </main>
    )
}
