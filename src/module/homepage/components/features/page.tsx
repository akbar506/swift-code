import { Code2, Zap, Lock, Users, Globe, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: 'Professional IDE',
      description: 'Full-featured code editor with syntax highlighting, debugging, and integrated terminal.',
    },
    {
      icon: Sparkles,
      title: 'AI Assistance',
      description: 'Get intelligent code suggestions, auto-completion, and AI-powered code reviews.',
    },
    {
      icon: Lock,
      title: 'Your Own API Keys',
      description: 'Complete control over your data. Bring your own API keys for any AI model provider.',
    },
    {
      icon: Zap,
      title: 'Blazing Fast',
      description: 'Lightning-quick performance with optimized code execution and instant feedback.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Real-time collaboration tools for seamless teamwork and knowledge sharing.',
    },
    {
      icon: Globe,
      title: 'Open Source',
      description: 'Community-driven development with full transparency and endless customization options.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features Built for Developers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, test, and deploy modern applications with AI at your side.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary hover:bg-card/80 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
