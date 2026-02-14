import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function OpeningLetter() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          <Card className="border-accent/20 bg-card/95 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 lg:p-16">
              {/* Letter Header */}
              <div className="mb-8 text-center">
                <p className="font-serif text-sm uppercase tracking-widest text-muted-foreground">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <Separator className="mb-8" />

              {/* Letter Content */}
              <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
                <div className="mb-6">
                  <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                    Happy Valentine's Day, my alagu ammukutyy 🥹😘😘🫶🏻
                  </p>
                </div>

                <div className="space-y-6 font-serif text-base leading-loose text-foreground/90 md:text-lg">
                  <p>
                    Even though we're miles apart, you are the closest person to my heart. Not a single day goes by without me thinking about you. Sometimes I just sit and smile at my phone remembering our chats, our calls, your laugh… and I realize how lucky I am to have you.
                  </p>

                  <p>
                    papu, loving you from a distance isn't easy. I miss holding your hand. i miss your voice 🥺, I miss looking into your eyes. I miss the simple feeling of sitting next to you without saying anything. But at the same time, this distance has shown me how strong our love is. We don't need physical closeness to feel connected — our hearts already understand each other 😉😘🤌🏻
                  </p>

                  <p>
                    You are my peace after a long day.<br />
                    You are my comfort when I feel low.<br />
                    You are the reason I believe in "forever."
                  </p>

                  <p>
                    There are nights when I wish I could just video call to you, hug you tightly, and tell you how much you mean to me 🌎😘. I want to create memories with you, travel with you, laugh with you, and build a future that we both dream about.
                  </p>

                  <p>
                    I promise you, this distance is temporary. One day, we won't count kilometers between us. We'll count the moments we share together. Until that day comes, I'll keep loving you stronger, trusting you deeper, and choosing you every single day.
                  </p>

                  <p>
                    you are not just my girlfriend… you are my heart, my forever queen, my happiness, my forever Valentine.💝😘❤️‍🔥
                  </p>

                  <p>
                    I love you more than words can ever explain. Happy valentine's day long distance wifeyyy😘😘🫶🏻 🌎 🫂
                  </p>
                </div>

                <div className="mt-12 text-right">
                  <p className="font-serif text-xl italic text-foreground md:text-2xl">
                    Forever yours,
                  </p>
                  <p className="mt-4 font-serif text-2xl font-light text-foreground md:text-3xl">
                    Your papu 💕
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
