import Link from 'next/link'
import { Terminal, Cpu, Zap, Shield } from 'lucide-react'

export default function LandingPage() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
                        GuguAPI
                        <span className="block text-3xl md:text-4xl mt-2 text-gray-700 dark:text-gray-200">
                            AI 网关
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
                        以统一的 Anthropic 兼容格式，稳定访问 Anthropic、OpenAI 与 Google 提供的模型。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/api-reference" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
                            开始构建 <span className="text-xl">→</span>
                        </Link>
                        <Link href="/guides/clients" className="px-8 py-4 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 rounded-full font-bold text-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all border border-gray-200 dark:border-neutral-700">
                            代码示例
                        </Link>
                    </div>
                </div>

                {/* Right Image/Logo */}
                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 blur-[80px] opacity-40 rounded-full animate-pulse"></div>
                        {/* Logo Image */}
                        <img
                            src="/logo.svg"
                            alt="GuguAPI Logo"
                            className="relative w-full h-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto mb-24">
                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                        <Terminal size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">统一接口</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        使用标准的 Anthropic (Claude) 格式调用所有模型。无需修改现有的 Claude SDK。
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800 hover:border-cyan-200 dark:hover:border-cyan-800 transition-colors">
                    <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">极速响应</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        全球边缘节点加速，智能路由选择最快通道，毫秒级延迟。
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                        <Cpu size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">智能调度</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        内置负载均衡和故障自动转移，确保服务 99.9% 高可用。
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800 hover:border-green-200 dark:hover:border-green-800 transition-colors">
                    <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                        <Shield size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">企业级安全</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        完善的令牌管理、额度控制和日志审计，保障数据安全。
                    </p>
                </div>
            </div>
        </>
    )
}
