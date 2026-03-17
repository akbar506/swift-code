import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Bring Your Own',
      description: 'Perfect for developers who prefer complete control',
      price: 'Free',
      priceDescription: 'Forever',
      features: [
        'Full IDE access',
        'Use your own API keys',
        'Unlimited projects',
        'Community support',
        'Open-source codebase',
        'Basic AI features',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For serious developers who want the best experience',
      price: '$19',
      priceDescription: '/month',
      features: [
        'Everything in Free',
        'Premium AI models included',
        'Priority support',
        'Advanced collaboration',
        'Performance monitoring',
        'Custom domains',
        'API quota: 1M requests/month',
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-foreground/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Always free to start with your own API keys.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all shadow-xl duration-300 border-border bg-card/10 hover:border-primary/50`}
            >
              {/* Card Header */}
              <div className="p-8 pb-6">
                {plan.highlighted && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.priceDescription}</span>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full"
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>

              {/* Features List */}
              <div className="border-t border-border px-8 py-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
