const WhatIDo = () => {
  return (
    <section id="about" className="py-10 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
            About Him
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        {/* Main content - matching reference site */}
        <div className="space-y-6 font-editorial text-foreground/90 leading-relaxed">
          <p>
            Whispers are circulating about an uncommon engineer — <span className="font-semibold text-headline">Siddhesh Phapale</span> — known across tech circles for transforming data and GenAI into systems that deliver real business impact, not just demos. Always curious, always building — long before GenAI became mainstream, he lives where data intelligence, automation, and generative AI intersect with strategic decision-making and revenue growth.
          </p>

          <div className="text-center text-gold text-xl">❧</div>

          <p>
            Siddhesh doesn't create ordinary dashboards or BI reports — he builds strategic intelligence platforms that drive sales performance, accelerate decision-making, and enable customer acquisition. With a sharp eye for identifying use cases and automation opportunities, he turns raw data into systems that scale, save time, and generate measurable ROI.
          </p>

          <p>
            He's known for architecting multi-agent GenAI workflows and deploying production-ready automation systems, balancing innovation with business responsibility. He thinks beyond model outputs — focusing on token optimization, cost control, intelligent caching, and maximizing performance per rupee, ensuring organizations adopt GenAI without overspending.
          </p>

          <div className="text-center text-gold text-xl">✦</div>

          <p className="text-center font-semibold text-headline">
            Every project he touches is engineered to automate, simplify, and multiply business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;