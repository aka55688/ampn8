import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DatingLandingPage() {
  // LINE URL
  const lineUrl = "https://line.me/ti/p/c6_hJAEnhy"

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto max-w-md px-4 py-8">
        {/* Main Content Card */}
        <Card className="overflow-hidden shadow-lg">
          {/* Hero Image */}
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1485880180_1439989783320658346_1695822.jpg-Av0L3qmhibfh6JTmuXQqH75VgFFHkq.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Headline */}
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">今夜、少しだけ話しませんか？</h1>
            <p className="mb-6 text-gray-600">
              こんにちは、翔太です。今年38歳、台湾人です。普段はご飯を炊いたり、歌を聴いたり、猫と一緒にぼんやりしたりするのが好きです。
            </p>

            {/* Emotional Appeal */}
            <p className="mb-8 text-gray-600">
              誘わないで、気まずくないで、私は真剣に雑談できる人を探して、ゆっくり知り合っていきたいです。
            </p>

            {/* CTA Button */}
            <Link href={lineUrl} target="_blank" className="block">
              <Button className="mb-8 w-full bg-[#06c755] py-6 text-lg font-bold hover:bg-[#05a847]">
                <MessageCircle className="mr-2 h-5 w-5" />
                LINEで翔太と話す
              </Button>
            </Link>

            {/* Trust Badges */}
            <div className="mb-8 flex justify-around">
              <div className="flex flex-col items-center">
                <Shield className="mb-2 h-6 w-6 text-gray-500" />
                <span className="text-xs text-gray-500">安心安全</span>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="mb-2 h-6 w-6 text-gray-500" />
                <span className="text-xs text-gray-500">真心交流</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="mb-2 h-6 w-6 text-gray-500" />
                <span className="text-xs text-gray-500">迅速返信</span>
              </div>
            </div>

            {/* Photo Gallery */}
            <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">日常の一コマ</h2>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1465567790_1269597105480850913_1695822.jpg-MQ8zauK0zBLGoe4cb96ea2e1vq9TIm.jpeg"
                alt="Gallery Photo 1"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1471199128_1316836187176194066_1695822.jpg-zr995UTsLZ40iNKx3Dp3R1EL7twSsj.jpeg"
                alt="Gallery Photo 2"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1450188646_1140587497110953677_1695822.jpg-li8YWlZL2IbfVGH4CxBGmUsDV2KJjN.jpeg"
                alt="Gallery Photo 3"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1447770236_1120300401280474618_1695822.jpg-Z0VGxZarAj6OVXaqsPdIk7Zh3Ezz4F.jpeg"
                alt="Gallery Photo 4"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Additional Photos */}
            <div className="mt-2 grid grid-cols-3 gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1466970693_1281365505219207191_1695822.jpg-v8E5WL8qn233ePk8DhlnQudTmbpTlc.jpeg"
                alt="Gallery Photo 5"
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1453667875_1169773381794193058_1695822.jpg-QxY21AmDjs9J9RgnI4ZvWUUQktlLAa.jpeg"
                alt="Gallery Photo 6"
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024_1473357836_1334944743708530951_1695822.jpg-rBi3lH2kNnl1xh7ytFfiHdtT0jziyf.jpeg"
                alt="Gallery Photo 7"
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-xs text-gray-400">
              ※無理な勧誘・営業は一切ありません。安心してご連絡ください。
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

