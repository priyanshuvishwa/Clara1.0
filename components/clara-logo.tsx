import Image from "next/image"

const ClaraLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 mb-3 relative">
        <Image src="/images/clara-logo.png" alt="CLARA Logo" width={128} height={128} priority />
      </div>
      <h1 className="text-4xl font-bold tracking-wider text-pink-600">CLARA</h1>
    </div>
  )
}

export default ClaraLogo
