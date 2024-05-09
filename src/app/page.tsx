import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center text-black">演奏助手V1.9.1</h1>
        <p>一款用于天刀端游、天刀手游PC版、一梦江湖和原神的21键自动弹奏的PC端软件。</p>
        <div>
          <a>下载软件</a>
          <a>使用说明</a>
        </div>
      </div>
    </main>
  );
}
