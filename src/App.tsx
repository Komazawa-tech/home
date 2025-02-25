import React, { useState } from 'react';
import { Menu, X, Code2, Users, Calendar, ChevronRight, Github, Terminal, Cpu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-komatech-purple" />
              <span className="ml-2 text-2xl font-bold text-komatech-purple">komatech</span>
            </div>

            {/* デスクトップナビ */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-komatech-purple">Komatechとは</a>
              <a href="#activities" className="text-gray-700 hover:text-komatech-purple">活動内容</a>
              <a href="#projects" className="text-gray-700 hover:text-komatech-purple">プロジェクト</a>
              <a href="#join" className="bg-komatech-purple text-white px-4 py-2 rounded-md hover:bg-komatech-purple-dark transition">
                参加する
              </a>
            </div>

            {/* モバイルメニュー */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-komatech-purple">Komatechとは</a>
              <a href="#activities" className="block px-3 py-2 text-gray-700 hover:text-komatech-purple">活動内容</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-komatech-purple">プロジェクト</a>
              <a href="#join" className="block px-3 py-2 text-komatech-purple font-medium">参加する</a>
            </div>
          </div>
        )}
      </nav>

      {/* ヒーローセクション */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-komatech-purple to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              イノベーション。コード。研究。
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              komatechは、プログラミングと研究を通じて新たな価値を創造するサークルです。
            </p>
            <a href="#join" className="inline-flex items-center bg-white text-komatech-purple px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition">
              今すぐ参加
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Komatechについて */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Komatechとは</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Terminal className="h-12 w-12 text-komatech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">研究志向</h3>
              <p className="text-gray-600">最新のプログラミング技術や開発手法を探求します。</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-komatech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">コミュニティ</h3>
              <p className="text-gray-600">情熱を持ったプログラマーが集う学習コミュニティ。</p>
            </div>
            <div className="text-center p-6">
              <Cpu className="h-12 w-12 text-komatech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">イノベーション</h3>
              <p className="text-gray-600">最先端技術を活用して、新しい価値を生み出します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 参加フォーム */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-komatech-purple rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Komatechに参加する</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              私たちのコミュニティに参加して、プログラミングの可能性を広げませんか？
            </p>
            <form className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="w-full px-4 py-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="w-full bg-white text-komatech-purple px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition"
              >
                参加を申し込む
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;