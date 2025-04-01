import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Zap className="h-5 w-5" />
            <span>品牌名稱</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              功能特點
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              客戶評價
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              價格方案
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              聯繫我們
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              登入
            </Button>
            <Button size="sm">
              立即開始
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    全新上線
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    讓您的業務更上一層樓
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    我們的解決方案幫助企業提高效率、降低成本並實現可持續增長。立即開始，體驗不同。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    免費試用
                  </Button>
                  <Button size="lg" variant="outline">
                    了解更多
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>14天免費試用</span>
                  <CheckCircle className="ml-2 h-4 w-4 text-primary" />
                  <span>無需信用卡</span>
                  <CheckCircle className="ml-2 h-4 w-4 text-primary" />
                  <span>全天候支持</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="產品展示"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">受到全球領先企業的信任</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=120"
                      width={120}
                      height={40}
                      alt={`合作夥伴 ${i + 1}`}
                      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto">
                  功能特點
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">為您的業務提供強大功能</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們的平台提供您所需的一切，幫助您的業務蓬勃發展。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "高效自動化",
                  description: "自動化重複性任務，讓您的團隊專注於重要事項。",
                  icon: <Zap className="h-10 w-10 text-primary" />,
                },
                {
                  title: "數據分析",
                  description: "獲取實時數據洞察，做出明智的業務決策。",
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                },
                {
                  title: "團隊協作",
                  description: "無縫協作工具，提高團隊生產力和效率。",
                  icon: <Users className="h-10 w-10 text-primary" />,
                },
              ].map((feature, i) => (
                <Card key={i} className="relative overflow-hidden border-none shadow-md">
                  <CardHeader className="pb-2">
                    <div className="mb-3">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto">
                  客戶評價
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">客戶對我們的評價</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  聽聽我們的客戶如何評價我們的產品和服務。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {[
                {
                  quote: "這個產品徹底改變了我們的業務運營方式。效率提高了50%，成本降低了30%。",
                  author: "張小明",
                  role: "某科技公司 CEO",
                },
                {
                  quote: "客戶支持團隊非常專業，總是能夠及時解決我們的問題。強烈推薦！",
                  author: "李小華",
                  role: "某電商平台 營運總監",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="relative overflow-hidden border-none shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg italic">"{testimonial.quote}"</p>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto">
                  價格方案
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">選擇適合您的方案</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們提供靈活的價格方案，滿足不同規模企業的需求。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  name: "入門版",
                  price: "¥99",
                  description: "適合小型企業和初創公司",
                  features: ["基本功能", "每月5GB存儲空間", "2個用戶", "郵件支持"],
                },
                {
                  name: "專業版",
                  price: "¥299",
                  description: "適合中型企業和團隊",
                  features: ["所有入門版功能", "每月50GB存儲空間", "10個用戶", "優先支持", "高級分析"],
                },
                {
                  name: "企業版",
                  price: "聯繫我們",
                  description: "適合大型企業和機構",
                  features: ["所有專業版功能", "無限存儲空間", "無限用戶", "24/7專屬支持", "自定義解決方案"],
                },
              ].map((plan, i) => (
                <Card
                  key={i}
                  className={`relative overflow-hidden ${i === 1 ? "border-primary shadow-lg" : "border shadow-md"}`}
                >
                  {i === 1 && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      最受歡迎
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/月</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                      {i === 2 ? "聯繫銷售" : "立即開始"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">準備好開始了嗎？</h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即註冊，開始14天免費試用，無需信用卡。
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="輸入您的電子郵件"
                    className="bg-primary-foreground text-primary-foreground placeholder:text-muted-foreground"
                  />
                  <Button type="submit" variant="secondary">
                    開始免費試用
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/80">
                  註冊即表示您同意我們的
                  <Link href="#" className="underline underline-offset-2">
                    服務條款
                  </Link>
                  和
                  <Link href="#" className="underline underline-offset-2">
                    隱私政策
                  </Link>
                  。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Zap className="h-5 w-5" />
            <span>品牌名稱</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 品牌名稱。保留所有權利。
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              隱私政策
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              服務條款
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              聯繫我們
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

