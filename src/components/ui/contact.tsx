import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
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
import { FiArrowRight } from "react-icons/fi";
import { useRef, useState } from "react";
import {
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogTitle,
    AlertDialog
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
    from_name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }).max(50, { message: "O nome deve ter no máximo 50 caracteres." }),
    user_email: z.string().email({ message: "O email deve ser válido." }),
    message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }).max(500, { message: "A mensagem deve ter no máximo 500 caracteres." })
})

export function Contact() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            from_name: '',
            user_email: '',
            message: ''
        }
    })

    const formRef = useRef<HTMLFormElement | null>(null)

    const onSubmit = () => {
        if (formRef.current) {
            emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
                .then(() => {
                    form.reset();
                    setIsDialogOpen(true)
                },
                    (error) => {
                        console.warn("FAILED TO SEND EMAIL", JSON.stringify(error));
                        setIsAlertDialogOpen(true)
                    }
                )
        }
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg blur-xl" />

            <div className="relative p-8 rounded-lg mt-10 bg-background/80 backdrop-blur-sm border border-primary/20">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-nowrap">
                    <h2 className="text-lg font-semibold">Vamos Conversar!</h2>
                </div>

                <div className="mt-4 mb-8 text-center">
                    <p className="text-muted-foreground">Estou sempre disponível para novos projetos e ideias</p>
                </div>

                <Form {...form}>
                    <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="contact-form">
                        <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="from_name"
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
                                                id="user_name"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="user_email"
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
                                                id="user_email"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
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
                                            id="message"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    enviar <FiArrowRight />
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

            {isDialogOpen && (
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Seu email foi enviado!</AlertDialogTitle>
                            <AlertDialogDescription>
                                Obrigado pelo contato! Você pode fechar esta notificação agora.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>
                                Fechar
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}

            {isAlertDialogOpen && (
                <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Erro ao enviar o email</AlertDialogTitle>
                            <AlertDialogDescription>
                                Ocorreu um problema ao enviar seu email. Tente novamente mais tarde.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={() => setIsAlertDialogOpen(false)}>
                                Fechar
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>

    )
}
