"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
    email: z.string().email({ message: "O email deve ser válido." }),
    message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
})

export function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg blur-xl" />
            
            <div className="relative p-8 rounded-lg mt-10 bg-background/80 backdrop-blur-sm border border-primary/20">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full">
                    <h2 className="text-lg font-semibold">Vamos Conversar!</h2>
                </div>

                <div className="mt-4 mb-8 text-center">
                    <p className="text-muted-foreground">Estou sempre disponível para novos projetos e ideias</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormDescription className="ml-1 font-medium">
                                            Nome    
                                        </FormDescription>
                                        <FormControl>
                                            <Input 
                                                placeholder="Seu Nome" 
                                                {...field} 
                                                className="bg-muted/50 border-primary/20 focus-visible:ring-offset-2"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormDescription className="ml-1 font-medium">
                                            Email
                                        </FormDescription>
                                        <FormControl>
                                            <Input 
                                                placeholder="seuemail@gmail.com" 
                                                {...field} 
                                                className="bg-muted/50 border-primary/20 focus-visible:ring-offset-2"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormDescription className="ml-1 font-medium">
                                        Mensagem
                                    </FormDescription>
                                    <FormControl>
                                        <Textarea 
                                            className="h-40 bg-muted/50 border-primary/20 focus-visible:ring-offset-2" 
                                            placeholder="Sua mensagem" 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button 
                            type="submit"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                            onClick={() => form.handleSubmit(onSubmit)}
                        >
                            <span className="flex items-center gap-2">
                                Enviar Mensagem
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    →
                                </motion.div>
                            </span>
                        </Button>
                    </form>
                </Form>

                <div className="mt-8 pt-6 border-t border-primary/20">
                    <p className="text-center text-sm text-muted-foreground mb-4">
                        Ou através das redes sociais
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                            LinkedIn
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                            Email
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}