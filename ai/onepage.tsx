import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  FileText,
  TrendingUp,
  Users,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Zap,
  Award,
  ExternalLink,
  Cpu,
  RefreshCw,
  Rocket,
  Layers,
  Search,
  Target,
  ClipboardCheck,
  Calendar,
  Video,
  Monitor,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '精密機械',
    interest: '國際市場開發計畫',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // 模擬提交成功後的狀態切換
    setTimeout(() => setSubmitted(false), 5000);
  };

  // 企業色配置
  // Primary: #14284d (深海藍)
  // Secondary: #6f9bf8 (亮捷藍)
  // Neutral: #c0c1c1 (銀灰)

  const SharpButton = ({ children, variant = 'primary', className = '', type = 'button' }) => {
    const baseStyle = "px-8 py-4 font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider border-2";
    const variants = {
      primary: `bg-[#6f9bf8] text-white border-[#6f9bf8] hover:bg-[#14284d] hover:border-[#14284d] hover:shadow-lg`,
      outline: `border-[#6f9bf8] text-[#6f9bf8] hover:bg-[#6f9bf8] hover:text-white`,
      dark: `bg-[#14284d] text-white border-[#14284d] hover:bg-[#6f9bf8] hover:border-[#6f9bf8]`
    };

    return (
      <button type={type} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };

  // 實績見證案例數據
  const cases = [
    {
      industry: "大型加工中心機",
      plan: "數位轉型補助計畫",
      results: [
        "海外品牌形象全面升級工程",
        "全球數位行銷推廣策略規劃",
        "國際線上展廳與數位化溝通工具導入"
      ],
      tag: "Center"
    },
    {
      industry: "精密製造",
      plan: "國際市場開發計畫",
      results: [
        "美國市場數位行銷曝光佈局",
        "歐洲市場跨境開發戰略分析",
        "目標買家精準接觸與轉型建議"
      ],
      tag: "Manufacturing"
    },
    {
      industry: "精密零件",
      plan: "國際市場開發計畫",
      results: [
        "義大利市場整合行銷策略規劃",
        "海外實體服務據點建置輔導",
        "在地化服務流程數位化對接"
      ],
      tag: "Components"
    },
    {
      industry: "家具產業",
      plan: "國際市場開發計畫",
      results: [
        "全新品牌形象官網改版建置",
        "全球 SEO 關鍵字排名優化佈局",
        "多語系品牌行銷影片製作與投放"
      ],
      tag: "Furniture"
    },
    {
      industry: "精密加工設備",
      plan: "國際市場開發計畫",
      results: [
        "中東、印度市場品牌線上曝光強化",
        "美國市場實體與數位行銷整合再升級",
        "跨區域市場競爭優勢戰略重塑"
      ],
      tag: "Equipment"
    },
    {
      industry: "廚房設備",
      plan: "數位轉型補助計畫",
      results: [
        "歐洲市場品牌再造 (Rebranding) 計畫",
        "跨國經營據點與經銷網絡佈局諮詢",
        "數位化供應鏈與品牌管理系統導入"
      ],
      tag: "Kitchen"
    }
  ];

  return (
    <div className="font-sans text-[#14284d] bg-white selection:bg-[#6f9bf8] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 border-b border-[#c0c1c1]/30 py-4 px-8 md:px-16 flex justify-between items-center shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#14284d] flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-md italic text-center">G</div>
          <div className="text-2xl font-black tracking-tighter text-[#14284d]">
            GTMC <span className="text-[#6f9bf8]">久大行銷</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest uppercase text-[#14284d]">
          <a href="#services" className="hover:text-[#6f9bf8] transition-colors">補助項目</a>
          <a href="#cases" className="hover:text-[#6f9bf8] transition-colors">成功案例</a>
          <a href="#about" className="hover:text-[#6f9bf8] transition-colors">顧問優勢</a>
          <a href="#process" className="hover:text-[#6f9bf8] transition-colors">輔導流程</a>
          <a href="#contact" className="hover:text-[#6f9bf8] border-b-2 border-[#6f9bf8]">立即預約</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#14284d]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6f9bf8]/10 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#c0c1c1]/10 skew-y-6"></div>

        <div className="container mx-auto px-8 md:px-24 grid md:grid-cols-2 gap-12 relative z-10 text-left text-white">
          <div className="flex flex-col justify-center animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-[#6f9bf8] text-white text-xs font-bold tracking-widest mb-6 w-fit uppercase text-left">
              2026 企業成長戰略輔導
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
              開拓外銷出口、企業轉型<br />
              <span className="text-[#6f9bf8]">補助計畫</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg border-l-4 border-[#6f9bf8] pl-6 text-left">
              久大行銷具備豐富補助計畫輔導經驗，協助企業精準對接政府資源。我們透過深度訪談與數據分析，與您一同佈局企業未來成長。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <SharpButton>立即諮詢補助計畫 <ArrowRight size={18} /></SharpButton>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center relative">
            <div className="w-full h-[500px] border border-white/10 relative group">
               <div className="absolute inset-4 border border-[#6f9bf8]/20"></div>
               <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#6f9bf8]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <Target size={240} className="text-[#6f9bf8]/5 group-hover:text-[#6f9bf8]/20 transition-all duration-700" />
               </div>
               <div className="absolute bottom-12 left-12 p-8 bg-[#14284d] border border-[#6f9bf8] text-white font-black text-4xl shadow-2xl text-center">
                 CORE<br /><span className="text-[#6f9bf8]">STRATEGY</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic text-[#14284d] text-center">當傳統模式面臨瓶頸，補助計畫是您的核心推力</h2>
          <div className="h-1.5 w-20 bg-[#6f9bf8] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-[#14284d]">
          {[
            { icon: <RefreshCw />, title: "獲利面臨轉型瓶頸", desc: "受國際市場快速變遷影響，出口成長停滯，急需政府專案補助以啟動數位化與技術升級。" },
            { icon: <Globe2 />, title: "開拓預算力不足", desc: "欲往新興市場開發卻受限於經費，無法一次啟動完整的數位佈局、SEO 與多語系行銷工作。" },
            { icon: <ShieldCheck />, title: "缺乏申請輔導經驗", desc: "政府計畫門檻嚴謹且流程繁雜，企業往往因不熟悉申請與結案細節而遺憾錯失資金機會。" }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-[#c0c1c1]/30 hover:border-[#6f9bf8] transition-all duration-300 group shadow-sm text-left">
              <div className="w-12 h-12 bg-[#14284d] text-white flex items-center justify-center mb-6 group-hover:bg-[#6f9bf8] transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#14284d]/5 px-8 md:px-24 overflow-hidden relative border-y border-[#c0c1c1]/20">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
          <h2 className="text-[200px] font-black leading-none -mr-20 text-[#14284d]">GTMC</h2>
        </div>

        <div className="mb-16 text-left md:text-center">
          <h2 className="text-4xl font-bold mb-4 italic tracking-tight text-[#14284d]">核心輔導補助項目</h2>
          <p className="text-gray-500 font-medium text-lg text-left md:text-center">憑藉久大行銷豐富輔導實績，協助企業高效獲取成長資源</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-0 lg:border lg:border-[#c0c1c1]/40 bg-white shadow-2xl overflow-hidden text-[#14284d]">
          {[
            {
              title: "國際市場開發計畫",
              tag: "Market Expansion",
              desc: "整合海外數位曝光與實體展覽，全方位輔導企業申請開發補助，分散營運風險。",
              features: ["多語系跨境官網與 SEO 補助", "國際展覽攤位與視覺計畫建議", "海外商務媒合對接協助"]
            },
            {
              title: "數位轉型補助計畫",
              tag: "Digital Transformation",
              desc: "針對企業內部流程數位化與自動化提供輔導，協助對接補助專案，提升作業效率。",
              features: ["管理系統(ERP/CRM)數位補助", "自動化與智慧化流程規劃建議", "資訊安全與數位技術升級諮詢"]
            },
            {
              title: "企業傳承計畫",
              tag: "Succession Plan",
              desc: "協助規劃二代接班與品牌延續，透過資源輔導解決接班過程中的品牌重新定義痛點。",
              features: ["傳承接班品牌策略規劃", "企業品牌識別重新定位 (Rebranding)", "二代經營與管理制度諮詢"]
            }
          ].map((service, idx) => (
            <div key={idx} className="p-12 lg:border-r border-[#c0c1c1]/30 last:border-r-0 hover:bg-[#14284d] group transition-all duration-500 bg-white text-left">
              <span className="text-xs font-bold tracking-widest text-[#6f9bf8] mb-4 block uppercase font-mono">{service.tag}</span>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors text-[#14284d]">{service.title}</h3>
              <p className="text-gray-500 mb-8 group-hover:text-[#c0c1c1] leading-relaxed transition-colors min-h-[4rem]">{service.desc}</p>
              <ul className="space-y-3 mb-10 text-left">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors text-left">
                    <CheckCircle2 size={16} className="text-[#6f9bf8]" /> {f}
                  </li>
                ))}
              </ul>
              <SharpButton variant="outline" className="w-full group-hover:bg-[#6f9bf8] group-hover:border-[#6f9bf8] group-hover:text-white">立即諮詢補助計畫</SharpButton>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Section (Updated: Machining Center at the top) */}
      <section id="cases" className="py-24 px-8 md:px-24 bg-white text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 italic text-[#14284d]">實績見證：成功案例</h2>
            <p className="text-gray-500 text-lg">久大行銷具備多年實戰輔導經驗，協助企業精準獲取應有的發展動能</p>
          </div>
          <div className="text-right">
             <div className="text-7xl font-black text-[#14284d]">50+</div>
             <div className="text-xs font-bold uppercase tracking-widest text-[#6f9bf8]">累積輔導成功案例</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#14284d]">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-[#c0c1c1]/20 hover:border-[#6f9bf8] transition-all duration-500 group shadow-sm hover:shadow-xl text-left flex flex-col h-full">
              <div className="bg-[#14284d] p-4 text-white flex justify-between items-center text-left">
                 <span className="font-bold tracking-widest text-sm uppercase font-mono">{item.tag} Case Study</span>
                 <Award size={18} className="text-[#6f9bf8]" />
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex flex-col gap-2">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter text-left">01 / 產業類別</span>
                   <h4 className="text-xl font-black text-[#14284d] text-left">{item.industry}</h4>
                </div>
                <div className="flex flex-col gap-2 border-l-4 border-[#6f9bf8] pl-4 text-[#14284d]">
                   <span className="text-xs font-bold text-[#6f9bf8] uppercase tracking-tighter text-left">02 / 通過的計畫</span>
                   <p className="text-lg font-bold text-[#14284d] text-left leading-tight">{item.plan}</p>
                </div>
                <div className="flex flex-col gap-4 text-[#14284d]">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter text-left">03 / 執行項目</span>
                   <ul className="space-y-2 text-left">
                      {item.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-gray-600 text-sm font-medium text-left">
                           <CheckCircle2 size={16} className="text-[#6f9bf8] shrink-0 mt-0.5" />
                           <span>{result}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advantage Section */}
      <section id="about" className="py-24 px-8 md:px-24 bg-[#14284d] text-white relative overflow-hidden border-b border-[#6f9bf8]/20 text-left md:text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-left md:text-center">
          <div className="text-center mb-20 text-left md:text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic text-left md:text-center">久大行銷：您的<br /><span className="text-[#6f9bf8]">補助計畫顧問夥伴</span></h2>
            <p className="text-white/60 text-lg max-w-4xl mx-auto leading-loose text-center">
              成功的補助計畫不應只是文書作業，而是基於企業發展的體系佈局。我們透過精準訪談與診斷，協助企業在轉型過程中極大化政府資源應用。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center text-left">
            <div className="space-y-12">
              <div className="flex gap-8 group text-left">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#6f9bf8] flex items-center justify-center font-black text-[#6f9bf8] text-2xl group-hover:bg-[#6f9bf8] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(111,155,248,0.2)] text-left">01</div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight text-left">深度診斷與資源盤點</h4>
                  <p className="text-white/60 leading-loose text-left">
                    深入訪談分析公司經營現況、資源痛點與開發目標，精準對接企業最需要的政府計畫。
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group text-left">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#6f9bf8] flex items-center justify-center font-black text-[#6f9bf8] text-2xl group-hover:bg-[#6f9bf8] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(111,155,248,0.2)] text-left">02</div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight text-left">市場與競品情資分析</h4>
                  <p className="text-white/60 leading-loose text-left">
                    解析目標市場趨勢與競品策略優劣，協助企業建立數位化轉型與品牌核心競爭力。
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group text-left">
                <div className="flex-shrink-0 w-16 h-16 border-2 border-[#6f9bf8] flex items-center justify-center font-black text-[#6f9bf8] text-2xl group-hover:bg-[#6f9bf8] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(111,155,248,0.2)] text-left">03</div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight text-left">中長期成長藍圖規劃</h4>
                  <p className="text-white/60 leading-loose text-left">
                    規劃未來中長期增長計畫，提供從資源對接、執行輔導到結案核銷的全流程策略服務。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative text-left md:text-center text-white">
               <div className="aspect-square bg-[#0d1a33] border border-white/10 p-2 relative shadow-2xl overflow-hidden group mx-auto md:mx-0 text-left">
                  <div className="absolute -inset-4 border border-[#6f9bf8]/20 -z-10 group-hover:border-[#6f9bf8]/40 transition-all duration-700"></div>
                  <div className="w-full h-full bg-gradient-to-br from-[#14284d] to-black p-10 flex flex-col justify-between relative text-center md:text-left text-white">
                     <div className="flex justify-between items-start text-left">
                        <Search size={64} className="text-[#6f9bf8] opacity-80 text-left" />
                        <div className="text-right text-white text-left">
                           <p className="text-[#c0c1c1] text-xs font-bold uppercase tracking-widest mb-1 text-right">Strategic Audit</p>
                           <p className="text-white font-black text-xl italic text-right">戰略診斷</p>
                        </div>
                     </div>

                     <div className="space-y-6 text-left">
                        <div className="flex items-center gap-4 text-left">
                           <div className="w-1.5 h-1.5 bg-[#6f9bf8] shadow-[0_0_8px_#6f9bf8] text-left"></div>
                           <p className="text-sm font-medium text-left">企業資源與傳承深度分析</p>
                        </div>
                        <div className="flex items-center gap-4 text-left text-white">
                           <div className="w-1.5 h-1.5 bg-[#6f9bf8] shadow-[0_0_8px_#6f9bf8] text-left"></div>
                           <p className="text-sm font-medium text-left">全球市場對標與數據解析</p>
                        </div>
                        <div className="flex items-center gap-4 text-left text-white">
                           <div className="w-1.5 h-1.5 bg-[#6f9bf8] shadow-[0_0_8px_#6f9bf8] text-left"></div>
                           <p className="text-sm font-medium text-left">中長期增長與結案核銷輔導</p>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-white/10 flex justify-between items-end text-left text-white">
                        <div className="text-5xl font-black text-[#6f9bf8] italic uppercase tracking-tighter text-left">Strategic</div>
                        <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-left">
                           <ArrowRight size={20} className="text-[#6f9bf8] text-left" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-8 md:px-24 bg-white border-t border-[#c0c1c1]/20 text-center text-[#14284d]">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 italic text-[#14284d] text-center">補助申請流程</h2>
          <p className="text-gray-400 font-medium text-lg italic text-center">客製化補助輔導流程，協助企業高效啟動成長計畫</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto text-left">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-[#c0c1c1]/30 -z-10"></div>

          {[
            { step: "01", title: "深度訪談與分析", desc: "1對1深度訪談，盤點企業現狀、核心資源與開發目標" },
            { step: "02", title: "補助內容規劃", desc: "依據企業成長需求擬定最適補助方案，規劃具體執行路徑與對接策略" },
            { step: "03", title: "輔導件編撰遞交", desc: "專業顧問引導資料準備，編撰具競爭力計畫書並正式遞交審核" },
            { step: "04", title: "結案成果核銷", desc: "協助整理執行成果報告，確保補助款項圓滿完成與順利撥付" }
          ].map((p, idx) => (
            <div key={idx} className="flex-1 text-center group text-[#14284d]">
              <div className="w-24 h-24 rounded-none bg-white border-2 border-[#c0c1c1] flex items-center justify-center mx-auto mb-8 group-hover:border-[#6f9bf8] group-hover:bg-[#6f9bf8] transition-all duration-300 relative shadow-sm">
                <span className="text-3xl font-black group-hover:text-white transition-colors">{p.step}</span>
              </div>
              <h4 className="text-xl font-black mb-4 group-hover:text-[#6f9bf8] transition-colors">{p.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed px-4 text-center">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 md:px-24 bg-[#14284d]/5 border-t border-[#c0c1c1]/30 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 text-left">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 italic text-[#14284d] text-left">開始您的<br /><span className="text-[#6f9bf8]">行銷補助計畫</span></h2>
            <p className="text-lg text-gray-600 mb-12 border-l-4 border-[#14284d] pl-6 leading-loose text-left">
              現在就聯繫 **GTMC 久大行銷**，讓我們透過深度訪談與數據分析，為您進行 **「企業資源與成長藍圖免費評估」**。
            </p>

            <div className="space-y-8 text-sm">
              <div className="flex items-center gap-6 text-left text-[#14284d]">
                <div className="w-14 h-14 bg-[#14284d] text-white flex items-center justify-center shadow-xl">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 uppercase tracking-tighter text-xs font-bold text-left">服務專線</p>
                  <p className="font-black text-2xl text-left">04-2296-6999</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-left text-[#14284d]">
                <div className="w-14 h-14 bg-[#6f9bf8] text-white flex items-center justify-center shadow-xl text-center">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 uppercase tracking-tighter text-xs font-bold text-left">電子郵件</p>
                  <p className="font-black text-xl text-left">service@gtmc.com.tw</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-left text-[#14284d]">
                <div className="w-14 h-14 bg-[#14284d] text-white flex items-center justify-center shadow-xl text-center">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 uppercase tracking-tighter text-xs font-bold text-left">營運總部</p>
                  <p className="font-bold text-lg text-left">台中市西屯區文心路三段241號17樓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl border-t-8 border-[#6f9bf8] relative animate-slide-up text-left text-[#14284d]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 bg-[#6f9bf8] text-white flex items-center justify-center shadow-lg text-center">
                  <CheckCircle2 size={56} />
                </div>
                <h3 className="text-3xl font-black italic text-[#14284d] text-center">需求已送出！</h3>
                <p className="text-gray-500 text-lg text-center">久大行銷顧問將在 24 小時內與您聯繫進行評估。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-2 gap-6 text-left">
                  <div className="text-left">
                    <label className="block text-xs font-black uppercase tracking-widest text-[#14284d] mb-2 text-left">姓名 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#f8f8f8] border-b-2 border-[#c0c1c1] focus:border-[#6f9bf8] focus:bg-white outline-none transition-all text-[#14284d] text-left"
                      placeholder="您的姓名"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-black uppercase tracking-widest text-[#14284d] mb-2 text-left">公司名稱 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#f8f8f8] border-b-2 border-[#c0c1c1] focus:border-[#6f9bf8] focus:bg-white outline-none transition-all text-[#14284d] text-left"
                      placeholder="公司全名"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-left text-[#14284d]">
                  <div className="text-left">
                    <label className="block text-xs font-black uppercase tracking-widest text-[#14284d] mb-2 text-left">電子郵件 *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[#f8f8f8] border-b-2 border-[#c0c1c1] focus:border-[#6f9bf8] focus:bg-white outline-none transition-all text-[#14284d] text-left"
                      placeholder="email@company.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-black uppercase tracking-widest text-[#14284d] mb-2 text-left">產業別 *</label>
                    <select
                      className="w-full px-4 py-3 bg-[#f8f8f8] border-b-2 border-[#c0c1c1] focus:border-[#6f9bf8] focus:bg-white outline-none transition-all cursor-pointer text-[#14284d] text-left"
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    >
                      <option value="精密機械">精密機械 / 自動化設備</option>
                      <option value="手工具">精密手工具 / 五金</option>
                      <option value="家具家飾">家具產業</option>
                      <option value="精密零件">精密零件 / 零組件</option>
                      <option value="精密製造">精密製造 / 加工</option>
                      <option value="廚房設備">廚房設備 / 餐飲設備</option>
                      <option value="其他">其他產業</option>
                    </select>
                  </div>
                </div>
                <div className="text-left text-[#14284d]">
                  <label className="block text-xs font-black uppercase tracking-widest text-[#14284d] mb-2 text-left">感興趣的補助類別</label>
                  <select
                    className="w-full px-4 py-3 bg-[#f8f8f8] border-b-2 border-[#c0c1c1] focus:border-[#6f9bf8] focus:bg-white outline-none transition-all cursor-pointer text-[#14284d] text-left"
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option>國際市場開發計畫</option>
                    <option>數位轉型補助計畫</option>
                    <option>企業傳承計畫</option>
                    <option>全方位政府資源適配評估</option>
                  </select>
                </div>
                <div className="text-left text-[#14284d]">
                  <label className="block text-xs font-black uppercase tracking-widest text-[#14284d] mb-2 text-left">需求描述</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-[#f8f8f8] border-b-2 border-[#c0c1c1] focus:border-[#6f9bf8] focus:bg-white outline-none transition-all text-[#14284d] text-left"
                    placeholder="請簡述您的外銷目標、資源現況 or 轉型挑戰..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <SharpButton type="submit" className="w-full shadow-lg text-left md:text-center text-white">立即諮詢補助計畫</SharpButton>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14284d] text-white py-16 px-8 md:px-24 border-t-4 border-[#6f9bf8] text-left">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12 border-b border-white/5 pb-12 text-left text-[#14284d]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-[#14284d] font-black text-2xl italic shadow-glow text-center">G</div>
              <div className="text-3xl font-black tracking-tighter text-white text-left">
                GTMC <span className="text-[#6f9bf8]">久大行銷</span>
              </div>
            </div>
            <div className="flex gap-8 text-xs font-black tracking-widest uppercase text-white/70 text-left">
              <a href="#about" className="hover:text-[#6f9bf8] transition-colors text-left">關於久大</a>
              <a href="#services" className="hover:text-[#6f9bf8] transition-colors text-left">服務項目</a>
              <a href="#" className="hover:text-[#6f9bf8] transition-colors text-left text-white/70">隱私權聲明</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#c0c1c1] text-left text-white/70">
            <p className="text-xs tracking-widest text-left">
              © 2026 久大行銷股份有限公司 GTMC Marketing. All rights reserved.
            </p>
            <div className="flex gap-5">
               <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#6f9bf8] hover:border-[#6f9bf8] cursor-pointer transition-all">FB</div>
               <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#14284d] hover:border-[#14284d] cursor-pointer transition-all">LI</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Float Chat Trigger */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-16 h-16 bg-[#6f9bf8] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#14284d] transition-all">
          <MessageSquare size={32} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(111,155,248,0.5);
        }
      ` }} />
    </div>
  );
};

export default App;
