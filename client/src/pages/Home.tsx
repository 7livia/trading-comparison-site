import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { tradingPlatforms, featureLabels } from "@/lib/platforms";

export default function Home() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set(Object.keys(tradingPlatforms[0]?.features || {}))
  );

  const toggleFeature = (feature: string) => {
    const newFeatures = new Set(selectedFeatures);
    if (newFeatures.has(feature)) {
      newFeatures.delete(feature);
    } else {
      newFeatures.add(feature);
    }
    setSelectedFeatures(newFeatures);
  };

  const togglePlatformExpand = (platformId: string) => {
    setExpandedPlatform(expandedPlatform === platformId ? null : platformId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Asymmetric Layout */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663384991524/KTSo24dvhwVNsoWCYejgUP/hero-trading-bg-KQvJhk5ekUiP5SkVsiCPDb.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline and CTA */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Find Your Perfect Trading Platform
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Compare the top stock trading platforms side-by-side. Make informed decisions based on fees, features, and trust ratings.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() =>
                    document
                      .getElementById("comparison")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Compare Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-4">
                <p className="text-sm text-gray-200 font-semibold">
                  TRUSTED BY MILLIONS
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-white">SEC Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-white">SIPC Protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-white">Zero Commissions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Stats */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white/95 backdrop-blur hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Major Platforms
                  </div>
                </Card>
                <Card className="p-6 bg-white/95 backdrop-blur hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600">$0</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Commission Trading
                  </div>
                </Card>
                <Card className="p-6 bg-white/95 backdrop-blur hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600">
                    50M+
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Active Traders
                  </div>
                </Card>
                <Card className="p-6 bg-white/95 backdrop-blur hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Average Trust Score
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-background">
        <div className="container">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl font-bold text-foreground">
                Platform Comparison
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed side-by-side comparison of the leading stock trading
                platforms. Filter by features to find your ideal match.
              </p>
            </div>

            {/* Feature Filter */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground">
                FILTER BY FEATURES
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {Object.entries(featureLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => toggleFeature(key)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedFeatures.has(key)
                        ? "bg-emerald-600 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Table - Desktop */}
            <div className="hidden lg:block overflow-x-auto border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Platform
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">
                      Min Deposit
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">
                      Commission
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">
                      Rating
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">
                      Trust Score
                    </th>
                    {Array.from(selectedFeatures).map((feature) => (
                      <th
                        key={feature}
                        className="px-6 py-4 text-center font-semibold text-foreground text-sm"
                      >
                        {featureLabels[feature as keyof typeof featureLabels]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tradingPlatforms.map((platform, idx) => (
                    <tr
                      key={platform.id}
                      className={`border-b border-border ${
                        idx % 2 === 0 ? "bg-background" : "bg-muted/20"
                      } hover:bg-muted/40 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{platform.logo}</span>
                          <div>
                            <div className="font-semibold text-foreground">
                              {platform.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Est. {platform.founded}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {platform.minDeposit}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-emerald-600">
                        {platform.commissionPerTrade}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-800"
                        >
                          {platform.rating}★
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-emerald-600 text-white">
                          {platform.trustScore}%
                        </Badge>
                      </td>
                      {Array.from(selectedFeatures).map((feature) => (
                        <td
                          key={`${platform.id}-${feature}`}
                          className="px-6 py-4 text-center"
                        >
                          {platform.features[
                            feature as keyof typeof platform.features
                          ] ? (
                            <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comparison Cards - Mobile */}
            <div className="lg:hidden space-y-4">
              {tradingPlatforms.map((platform) => (
                <Card
                  key={platform.id}
                  className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => togglePlatformExpand(platform.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-3xl">{platform.logo}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {platform.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Min: {platform.minDeposit} • Commission:{" "}
                          {platform.commissionPerTrade}
                        </p>
                      </div>
                    </div>
                    {expandedPlatform === platform.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>

                  {expandedPlatform === platform.id && (
                    <div className="mt-6 space-y-4 border-t border-border pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold">
                            RATING
                          </p>
                          <Badge className="mt-2 bg-emerald-100 text-emerald-800">
                            {platform.rating}★
                          </Badge>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold">
                            TRUST SCORE
                          </p>
                          <Badge className="mt-2 bg-emerald-600 text-white">
                            {platform.trustScore}%
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground font-semibold mb-3">
                          FEATURES
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(featureLabels).map(([key, label]) => (
                            <div
                              key={key}
                              className="flex items-center gap-2 text-sm"
                            >
                              {platform.features[
                                key as keyof typeof platform.features
                              ] ? (
                                <Check className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <X className="w-4 h-4 text-gray-300" />
                              )}
                              <span className="text-foreground">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => window.open(platform.website, "_blank")}
                      >
                        Visit Platform
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl font-bold text-foreground">
                Why Trust These Platforms?
              </h2>
              <p className="text-lg text-muted-foreground">
                All platforms listed are SEC-regulated and SIPC-protected,
                ensuring your investments are secure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-background">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  SEC Regulated
                </h3>
                <p className="text-muted-foreground">
                  All platforms are registered with the Securities and Exchange
                  Commission for investor protection.
                </p>
              </Card>

              <Card className="p-8 bg-background">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  SIPC Protected
                </h3>
                <p className="text-muted-foreground">
                  Your assets are protected up to $500,000 through SIPC
                  insurance coverage.
                </p>
              </Card>

              <Card className="p-8 bg-background">
                <div className="text-4xl mb-4">💯</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-muted-foreground">
                  Zero-commission trading on stocks and ETFs across all major
                  platforms.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Start Trading?
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose a platform from our comparison and open your account today.
              Most platforms have zero account minimums.
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() =>
                document
                  .getElementById("comparison")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Comparison
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">About</h4>
              <p className="text-sm text-muted-foreground">
                Helping investors find the best trading platforms for their
                needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tradingPlatforms.slice(0, 4).map((p) => (
                  <li key={p.id}>{p.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2026 Trading Comparison Site. All rights reserved. This site is
              for informational purposes only and not financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
