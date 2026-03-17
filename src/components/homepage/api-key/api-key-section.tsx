import { Button } from '@/components/ui/button';
import { Key, Shield, Copy } from 'lucide-react';
import Link from 'next/link';

export default function ApiKeySection() {
    return (
        <section id="api" className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 mb-4">
                            <Key className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-secondary-foreground">API Integration</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Use Your Own API Keys</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Want to use your preferred AI model provider? Simply add your API keys to CodeAI and maintain complete control over your data, costs, and model selection. No vendor lock-in.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex gap-4">
                                <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Secure Storage</h3>
                                    <p className="text-sm text-muted-foreground">Your API keys are encrypted and stored securely.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Copy className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Full Control</h3>
                                    <p className="text-sm text-muted-foreground">Switch between providers or models instantly.</p>
                                </div>
                            </div>
                        </div>
                        <Link href={"/dashboard"}>
                        <Button size="lg" className="w-full sm:w-auto">
                            Get Started with Your API Key
                        </Button>
                        </Link>
                    </div>

                    {/* Right - Code Example */}
                    <div className="rounded-lg border border-border bg-background p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-sm font-semibold text-muted-foreground">Add Your API Key</span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Example</span>
                        </div>
                        <div className="rounded bg-background border border-border/50 p-4 font-mono text-sm overflow-x-auto">
                            <div className="text-muted-foreground">
                                <div className="mb-2">
                                    <span className="text-primary">const</span> <span className="text-foreground">config</span> <span className="text-primary">=</span> {'{'}
                                </div>
                                <div className="mb-2 ml-4">
                                    <span className="text-foreground">apiKey:</span> <span className="text-green-500">{'`${YOUR_API_KEY}`'}</span>,
                                </div>
                                <div className="mb-2 ml-4">
                                    <span className="text-foreground">provider:</span> <span className="text-green-500">'openai'</span>,
                                </div>
                                <div className="mb-2 ml-4">
                                    <span className="text-foreground">model:</span> <span className="text-green-500">'gpt-4'</span>,
                                </div>
                                <div>
                                    {'}'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
