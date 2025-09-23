"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  MapPin,
  Satellite,
  Brain,
  Smartphone,
  Bell,
  Activity,
  BarChart3,
  Radio,
  Globe,
  Layers,
  Send,
  Mic,
  MicOff,
  Volume2,
  Languages,
  Phone,
} from "lucide-react"

const translations = {
  en: {
    title: "Flood GUARD",
    subtitle: "AI-Powered Urban Flood Prediction & Early Warning System",
    modules: {
      satellite: {
        title: "Satellite Data",
        description: "Real-time NASA satellite monitoring",
      },
      alerts: {
        title: "Flood Alerts",
        description: "Emergency warning system",
      },
      mapping: {
        title: "Risk Mapping",
        description: "Interactive flood risk maps",
      },
      ai: {
        title: "AI Prediction",
        description: "Machine learning forecasts",
      },
      mobile: {
        title: "Mobile App",
        description: "Citizen reporting platform",
      },
      analytics: {
        title: "Analytics",
        description: "Data insights & trends",
      },
      sensors: {
        title: "IoT Sensors",
        description: "Ground-level monitoring",
      },
      broadcast: {
        title: "Emergency Broadcast",
        description: "Mass alert system",
      },
      location: {
        title: "Location Analysis",
        description: "Area risk assessment",
      },
    },
    dashboard: {
      activeAlerts: "Active Alerts",
      riskLevel: "Risk Level",
      coverage: "Coverage",
      lastUpdate: "Last Update",
    },
  },
  hi: {
    title: "फ्लड गार्ड",
    subtitle: "AI-संचालित शहरी बाढ़ पूर्वानुमान और प्रारंभिक चेतावनी प्रणाली",
    modules: {
      satellite: {
        title: "उपग्रह डेटा",
        description: "रियल-टाइम NASA उपग्रह निगरानी",
      },
      alerts: {
        title: "बाढ़ अलर्ट",
        description: "आपातकालीन चेतावनी प्रणाली",
      },
      mapping: {
        title: "जोखिम मैपिंग",
        description: "इंटरैक्टिव बाढ़ जोखिम मानचित्र",
      },
      ai: {
        title: "AI पूर्वानुमान",
        description: "मशीन लर्निंग पूर्वानुमान",
      },
      mobile: {
        title: "मोबाइल ऐप",
        description: "नागरिक रिपोर्टिंग प्लेटफॉर्म",
      },
      analytics: {
        title: "एनालिटिक्स",
        description: "डेटा अंतर्दृष्टि और रुझान",
      },
      sensors: {
        title: "IoT सेंसर",
        description: "भूमि स्तर निगरानी",
      },
      broadcast: {
        title: "आपातकालीन प्रसारण",
        description: "सामूहिक अलर्ट सिस्टम",
      },
      location: {
        title: "स्थान विश्लेषण",
        description: "क्षेत्र जोखिम मूल्यांकन",
      },
    },
    dashboard: {
      activeAlerts: "सक्रिय अलर्ट",
      riskLevel: "जोखिम स्तर",
      coverage: "कवरेज",
      lastUpdate: "अंतिम अपडेट",
    },
  },
  es: {
    title: "FloodGUARD",
    subtitle: "Sistema de Predicción y Alerta Temprana de Inundaciones Urbanas con IA",
    modules: {
      satellite: {
        title: "Datos Satelitales",
        description: "Monitoreo satelital NASA en tiempo real",
      },
      alerts: {
        title: "Alertas de Inundación",
        description: "Sistema de alerta de emergencia",
      },
      mapping: {
        title: "Mapeo de Riesgo",
        description: "Mapas interactivos de riesgo de inundación",
      },
      ai: {
        title: "Predicción IA",
        description: "Pronósticos de aprendizaje automático",
      },
      mobile: {
        title: "App Móvil",
        description: "Plataforma de reporte ciudadano",
      },
      analytics: {
        title: "Analíticas",
        description: "Perspectivas y tendencias de datos",
      },
      sensors: {
        title: "Sensores IoT",
        description: "Monitoreo a nivel del suelo",
      },
      broadcast: {
        title: "Transmisión de Emergencia",
        description: "Sistema de alerta masiva",
      },
      location: {
        title: "Análisis de Ubicación",
        description: "Evaluación de riesgo del área",
      },
    },
    dashboard: {
      activeAlerts: "Alertas Activas",
      riskLevel: "Nivel de Riesgo",
      coverage: "Cobertura",
      lastUpdate: "Última Actualización",
    },
  },
  fr: {
    title: "Flood GUARD",
    subtitle: "Système de Prédiction et d'Alerte Précoce des Inondations Urbaines par IA",
    modules: {
      satellite: {
        title: "Données Satellite",
        description: "Surveillance satellite NASA en temps réel",
      },
      alerts: {
        title: "Alertes d'Inondation",
        description: "Système d'alerte d'urgence",
      },
      mapping: {
        title: "Cartographie des Risques",
        description: "Cartes interactives des risques d'inondation",
      },
      ai: {
        title: "Prédiction IA",
        description: "Prévisions d'apprentissage automatique",
      },
      mobile: {
        title: "App Mobile",
        description: "Plateforme de signalement citoyen",
      },
      analytics: {
        title: "Analytiques",
        description: "Insights et tendances des données",
      },
      sensors: {
        title: "Capteurs IoT",
        description: "Surveillance au niveau du sol",
      },
      broadcast: {
        title: "Diffusion d'Urgence",
        description: "Système d'alerte de masse",
      },
      location: {
        title: "Analyse de Localisation",
        description: "Évaluation des risques de zone",
      },
    },
    dashboard: {
      activeAlerts: "Alertes Actives",
      riskLevel: "Niveau de Risque",
      coverage: "Couverture",
      lastUpdate: "Dernière Mise à Jour",
    },
  },
  zh: {
    title: "洪水卫士",
    subtitle: "AI驱动的城市洪水预测和早期预警系统",
    modules: {
      satellite: {
        title: "卫星数据",
        description: "实时NASA卫星监测",
      },
      alerts: {
        title: "洪水警报",
        description: "紧急警报系统",
      },
      mapping: {
        title: "风险地图",
        description: "交互式洪水风险地图",
      },
      ai: {
        title: "AI预测",
        description: "机器学习预报",
      },
      mobile: {
        title: "移动应用",
        description: "公民报告平台",
      },
      analytics: {
        title: "分析",
        description: "数据洞察和趋势",
      },
      sensors: {
        title: "物联网传感器",
        description: "地面监测",
      },
      broadcast: {
        title: "紧急广播",
        description: "大规模警报系统",
      },
      location: {
        title: "位置分析",
        description: "区域风险评估",
      },
    },
    dashboard: {
      activeAlerts: "活跃警报",
      riskLevel: "风险等级",
      coverage: "覆盖范围",
      lastUpdate: "最后更新",
    },
  },
}

const mockFloodData = {
  alerts: [
    { id: 1, location: "Mumbai Central", severity: "High", time: "2 mins ago" },
    { id: 2, location: "Delhi NCR", severity: "Medium", time: "15 mins ago" },
    { id: 3, location: "Chennai Port", severity: "Low", time: "1 hour ago" },
  ],
  riskLevel: "Medium",
  coverage: "85%",
  lastUpdate: "2 minutes ago",
}

export default function FloodPredictionPrototype() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ]

  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  const modules = [
    {
      id: "satellite",
      title: t.modules.satellite.title,
      icon: Satellite,
      description: t.modules.satellite.description,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: "alerts",
      title: t.modules.alerts.title,
      icon: AlertTriangle,
      description: t.modules.alerts.description,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      id: "mapping",
      title: t.modules.mapping.title,
      icon: MapPin,
      description: t.modules.mapping.description,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      id: "ai",
      title: t.modules.ai.title,
      icon: Brain,
      description: t.modules.ai.description,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      id: "mobile",
      title: t.modules.mobile.title,
      icon: Smartphone,
      description: t.modules.mobile.description,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      id: "analytics",
      title: t.modules.analytics.title,
      icon: BarChart3,
      description: t.modules.analytics.description,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      id: "sensors",
      title: t.modules.sensors.title,
      icon: Activity,
      description: t.modules.sensors.description,
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
    },
    {
      id: "broadcast",
      title: t.modules.broadcast.title,
      icon: Radio,
      description: t.modules.broadcast.description,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
    {
      id: "location",
      title: t.modules.location.title,
      icon: Globe,
      description: t.modules.location.description,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with better visibility */}
      <div className="absolute inset-0 z-0">
        {/* NASA Satellite Images */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/nasa-satellite-view-of-earth-from-space-showing-we.jpg')",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/nasa-gpm-satellite-rainfall-measurement-data.jpg')",
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-green-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-900/30" />

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-teal-400/20 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-400/20 rounded-full blur-md animate-pulse delay-2000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Satellite className="h-8 w-8 text-blue-400" />
                  <h1 className="text-2xl font-bold text-white">{t.title}</h1>
                </div>
                <Badge variant="outline" className="text-blue-400 border-blue-400/50">
                  NASA Integration
                </Badge>
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Languages className="h-5 w-5 text-slate-400" />
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-slate-800/80 text-white border border-slate-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-sm text-slate-300">{currentTime.toLocaleTimeString()}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        {!activeModule ? (
          <DashboardHome
            modules={modules}
            setActiveModule={setActiveModule}
            translations={translations}
            selectedLanguage={selectedLanguage}
            t={t}
          />
        ) : (
          <ModuleView
            activeModule={activeModule}
            setActiveModule={setActiveModule}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>
    </div>
  )
}

function DashboardHome({
  modules,
  setActiveModule,
  translations,
  selectedLanguage,
  t,
}: {
  modules: any[]
  setActiveModule: (module: string) => void
  translations: any
  selectedLanguage: string
  t: any
}) {
  return (
    <main className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
          {t.title}
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{t.dashboard.activeAlerts}</p>
                <p className="text-2xl font-bold text-white">{mockFloodData.alerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{t.dashboard.riskLevel}</p>
                <p className="text-2xl font-bold text-yellow-400">{mockFloodData.riskLevel}</p>
              </div>
              <Activity className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{t.dashboard.coverage}</p>
                <p className="text-2xl font-bold text-green-400">{mockFloodData.coverage}</p>
              </div>
              <Globe className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{t.dashboard.lastUpdate}</p>
                <p className="text-2xl font-bold text-blue-400">{mockFloodData.lastUpdate}</p>
              </div>
              <Bell className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => {
          const IconComponent = module.icon
          return (
            <Card
              key={module.id}
              className={`bg-slate-800/80 backdrop-blur-md border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 cursor-pointer group hover:scale-105 ${module.borderColor}`}
              onClick={() => setActiveModule(module.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${module.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                      {module.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm leading-relaxed">{module.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </main>
  )
}

function ModuleView({
  activeModule,
  setActiveModule,
  selectedLanguage,
}: { activeModule: string; setActiveModule: (module: string | null) => void; selectedLanguage: string }) {
  const renderModule = () => {
    switch (activeModule) {
      case "satellite":
        return <SatelliteModule selectedLanguage={selectedLanguage} />
      case "alerts":
        return <AlertModule selectedLanguage={selectedLanguage} />
      case "mapping":
        return <MappingModule selectedLanguage={selectedLanguage} />
      case "ai":
        return <AIModule selectedLanguage={selectedLanguage} />
      case "mobile":
        return <MobileModule selectedLanguage={selectedLanguage} />
      case "analytics":
        return <AnalyticsModule selectedLanguage={selectedLanguage} />
      case "sensors":
        return <SensorsModule selectedLanguage={selectedLanguage} />
      case "broadcast":
        return <BroadcastModule selectedLanguage={selectedLanguage} />
      case "location":
        return <LocationModule selectedLanguage={selectedLanguage} />
      default:
        return <div>Module not found</div>
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-6">
        <Button
          onClick={() => setActiveModule(null)}
          variant="outline"
          className="text-white border-slate-600 hover:bg-slate-700"
        >
          ← Back to Dashboard
        </Button>
      </div>
      {renderModule()}
    </div>
  )
}

// Updated module content with new styling and data
function SatelliteModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Satellite className="h-6 w-6 text-blue-400" />
            <span>{t.modules.satellite.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">NASA GPM Satellite</p>
              <p className="text-white font-semibold">Active - Real-time Data</p>
              <Badge className="bg-green-500/20 text-green-400">Online</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">Coverage Area</p>
              <p className="text-white font-semibold">Global - 60°N to 60°S</p>
              <Badge className="bg-blue-500/20 text-blue-400">Full Coverage</Badge>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Latest Satellite Data</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Precipitation Rate:</span>
                <span className="text-white">12.5 mm/hr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cloud Coverage:</span>
                <span className="text-white">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Last Update:</span>
                <span className="text-white">2 minutes ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AlertModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            <span>{t.modules.alerts.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockFloodData.alerts.map((alert) => (
              <div key={alert.id} className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-semibold">{alert.location}</h4>
                    <p className="text-slate-400 text-sm">{alert.time}</p>
                  </div>
                  <Badge
                    className={
                      alert.severity === "High"
                        ? "bg-red-500/20 text-red-400"
                        : alert.severity === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MappingModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-green-400" />
            <span>{t.modules.mapping.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900/50 p-8 rounded-lg text-center">
            <Layers className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Interactive Risk Map</h3>
            <p className="text-slate-400">Real-time flood risk visualization with GIS integration</p>
            <Button className="mt-4 bg-green-500 hover:bg-green-600">Launch Map View</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AIModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = { role: "user", content: inputMessage }
    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: getAIResponse(inputMessage, selectedLanguage),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)

      // Text-to-speech for AI response
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse.content)
        utterance.lang = getLanguageCode(selectedLanguage)
        setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)
        speechSynthesis.speak(utterance)
      }
    }, 2000)
  }

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.lang = getLanguageCode(selectedLanguage)
      recognition.continuous = false
      recognition.interimResults = false

      recognition.onstart = () => setIsListening(true)
      recognition.onend = () => setIsListening(false)
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputMessage(transcript)
      }

      recognition.start()
    }
  }

  const getLanguageCode = (lang: string) => {
    const codes: { [key: string]: string } = {
      en: "en-US",
      hi: "hi-IN",
      es: "es-ES",
      fr: "fr-FR",
      zh: "zh-CN",
    }
    return codes[lang] || "en-US"
  }

  const getAIResponse = (message: string, lang: string) => {
    const responses: { [key: string]: { [key: string]: string } } = {
      en: {
        flood:
          "Based on current satellite data, there's a 65% chance of flooding in your area within the next 6 hours. I recommend moving to higher ground and avoiding low-lying areas.",
        weather:
          "Current weather conditions show heavy rainfall with 45mm/hr intensity. Wind speed is 25 km/hr from the southwest.",
        safety:
          "For flood safety: 1) Move to higher ground immediately, 2) Avoid walking through moving water, 3) Stay away from electrical equipment, 4) Keep emergency supplies ready.",
        default:
          "I'm your AI flood prediction assistant. I can help you with flood risk assessment, safety measures, weather updates, and emergency planning. How can I assist you today?",
      },
      hi: {
        flood:
          "वर्तमान उपग्रह डेटा के आधार पर, अगले 6 घंटों में आपके क्षेत्र में बाढ़ की 65% संभावना है। मैं सुझाता हूं कि ऊंचे स्थान पर जाएं और निचले इलाकों से बचें।",
        weather:
          "वर्तमान मौसम की स्थिति 45mm/hr की तीव्रता के साथ भारी बारिश दिखाती है। हवा की गति दक्षिण-पश्चिम से 25 km/hr है।",
        safety:
          "बाढ़ सुरक्षा के लिए: 1) तुरंत ऊंचे स्थान पर जाएं, 2) बहते पानी में चलने से बचें, 3) बिजली के उपकरणों से दूर रहें, 4) आपातकालीन आपूर्ति तैयार रखें।",
        default:
          "मैं आपका AI बाढ़ पूर्वानुमान सहायक हूं। मैं बाढ़ जोखिम मूल्यांकन, सुरक्षा उपायों, मौसम अपडेट और आपातकालीन योजना में आपकी सहायता कर सकता हूं।",
      },
    }

    const langResponses = responses[lang] || responses.en

    if (message.toLowerCase().includes("flood") || message.toLowerCase().includes("बाढ़")) {
      return langResponses.flood
    } else if (message.toLowerCase().includes("weather") || message.toLowerCase().includes("मौसम")) {
      return langResponses.weather
    } else if (message.toLowerCase().includes("safety") || message.toLowerCase().includes("सुरक्षा")) {
      return langResponses.safety
    } else {
      return langResponses.default
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-400" />
            <span>{t.modules.ai.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* AI Prediction Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400 text-sm">Prediction Accuracy</p>
                <p className="text-2xl font-bold text-purple-400">94.2%</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400 text-sm">Models Running</p>
                <p className="text-2xl font-bold text-blue-400">12</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400 text-sm">Data Points</p>
                <p className="text-2xl font-bold text-green-400">2.4M</p>
              </div>
            </div>

            {/* AI Chatbot */}
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-400" />
                <span>AI Assistant</span>
                {isSpeaking && <Volume2 className="h-4 w-4 text-green-400 animate-pulse" />}
              </h4>

              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto mb-4 space-y-2">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.role === "user" ? "bg-blue-500 text-white" : "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700 text-slate-200 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about flood predictions..."
                  className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  onClick={startVoiceRecognition}
                  variant="outline"
                  size="sm"
                  className={`border-slate-600 ${isListening ? "bg-red-500 text-white" : "text-slate-300"}`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button onClick={handleSendMessage} size="sm" className="bg-purple-500 hover:bg-purple-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MobileModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Smartphone className="h-6 w-6 text-indigo-400" />
            <span>{t.modules.mobile.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">FloodGUARD Mobile App</h4>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Real-time Alerts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Citizen Reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Emergency Contacts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Offline Maps</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600">Download App</Button>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg">
              <div className="bg-slate-800 p-4 rounded-lg border-2 border-slate-600 max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <h5 className="text-white font-semibold">{t.title}</h5>
                  <p className="text-slate-400 text-xs">Mobile Interface</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-red-500/20 p-2 rounded text-center">
                    <p className="text-red-400 text-xs font-semibold">HIGH ALERT</p>
                    <p className="text-white text-xs">Mumbai Central</p>
                  </div>
                  <div className="bg-slate-700 p-2 rounded">
                    <p className="text-white text-xs">Report Flooding</p>
                  </div>
                  <div className="bg-slate-700 p-2 rounded">
                    <p className="text-white text-xs">Emergency Contacts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AnalyticsModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-orange-400" />
            <span>{t.modules.analytics.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Flood Trends</h4>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">This Month</span>
                    <span className="text-orange-400 font-semibold">23 Events</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Last Month</span>
                    <span className="text-slate-300">18 Events</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Accuracy Rate</span>
                    <span className="text-green-400 font-semibold">94.2%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Risk Areas</h4>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Mumbai</span>
                    <Badge className="bg-red-500/20 text-red-400">High</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Delhi</span>
                    <Badge className="bg-yellow-500/20 text-yellow-400">Medium</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Chennai</span>
                    <Badge className="bg-green-500/20 text-green-400">Low</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SensorsModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Activity className="h-6 w-6 text-teal-400" />
            <span>{t.modules.sensors.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Water Level</span>
                <Badge className="bg-green-500/20 text-green-400">Normal</Badge>
              </div>
              <p className="text-2xl font-bold text-white">2.3m</p>
              <p className="text-slate-400 text-xs">Sensor ID: WL-001</p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Flow Rate</span>
                <Badge className="bg-yellow-500/20 text-yellow-400">Elevated</Badge>
              </div>
              <p className="text-2xl font-bold text-white">45 m³/s</p>
              <p className="text-slate-400 text-xs">Sensor ID: FR-002</p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Rainfall</span>
                <Badge className="bg-red-500/20 text-red-400">High</Badge>
              </div>
              <p className="text-2xl font-bold text-white">25 mm/hr</p>
              <p className="text-slate-400 text-xs">Sensor ID: RF-003</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-white font-semibold mb-4">Sensor Network Status</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Sensors</span>
                  <span className="text-green-400 font-semibold">127/130</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Network Coverage</span>
                  <span className="text-blue-400 font-semibold">97.7%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Data Quality</span>
                  <span className="text-green-400 font-semibold">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Last Sync</span>
                  <span className="text-white">30 seconds ago</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BroadcastModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en
  const [selectedArea, setSelectedArea] = useState("")
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("alert")

  const areas = ["Mumbai", "Delhi", "Chennai", "Kolkata", "Bangalore", "Hyderabad"]

  const sendEmergencyBroadcast = () => {
    // Simulate sending broadcast
    alert(`Emergency broadcast sent to ${selectedArea}: ${message}`)
  }

  const sendEmergencySMS = () => {
    // Simulate sending SMS
    alert(`Emergency SMS sent to all registered users in ${selectedArea}`)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Radio className="h-6 w-6 text-pink-400" />
            <span>{t.modules.broadcast.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Area Selection */}
          <div>
            <label className="text-white font-semibold mb-2 block">Select Area</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Choose area...</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Message Type */}
          <div>
            <label className="text-white font-semibold mb-2 block">Message Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="alert"
                  checked={messageType === "alert"}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="text-pink-500"
                />
                <span className="text-slate-300">Emergency Alert</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="warning"
                  checked={messageType === "warning"}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="text-pink-500"
                />
                <span className="text-slate-300">Warning</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="info"
                  checked={messageType === "info"}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="text-pink-500"
                />
                <span className="text-slate-300">Information</span>
              </label>
            </div>
          </div>

          {/* Custom Message */}
          <div>
            <label className="text-white font-semibold mb-2 block">Custom Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter emergency message..."
              rows={4}
              className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <p className="text-slate-400 text-sm mt-1">{message.length}/160 characters</p>
          </div>

          {/* Recipient Estimation */}
          {selectedArea && (
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Estimated Recipients</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-400">Mobile Users:</span>
                  <span className="text-white ml-2 font-semibold">45,230</span>
                </div>
                <div>
                  <span className="text-slate-400">Radio Stations:</span>
                  <span className="text-white ml-2 font-semibold">12</span>
                </div>
                <div>
                  <span className="text-slate-400">TV Channels:</span>
                  <span className="text-white ml-2 font-semibold">8</span>
                </div>
                <div>
                  <span className="text-slate-400">Social Media:</span>
                  <span className="text-white ml-2 font-semibold">125K</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              onClick={sendEmergencyBroadcast}
              disabled={!selectedArea || !message}
              className="flex-1 bg-pink-500 hover:bg-pink-600 disabled:opacity-50"
            >
              <Radio className="h-4 w-4 mr-2" />
              Send Broadcast
            </Button>
            <Button
              onClick={sendEmergencySMS}
              disabled={!selectedArea}
              variant="outline"
              className="flex-1 border-pink-500 text-pink-400 hover:bg-pink-500/10 bg-transparent"
            >
              <Phone className="h-4 w-4 mr-2" />
              Send Emergency SMS
            </Button>
          </div>

          {/* Recent Broadcasts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recent Broadcasts</h4>
            <div className="space-y-2">
              <div className="bg-slate-900/50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white text-sm font-semibold">High Flood Alert - Mumbai</p>
                    <p className="text-slate-400 text-xs">Sent 15 minutes ago</p>
                  </div>
                  <Badge className="bg-red-500/20 text-red-400">Emergency</Badge>
                </div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white text-sm font-semibold">Weather Warning - Delhi</p>
                    <p className="text-slate-400 text-xs">Sent 2 hours ago</p>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-400">Warning</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LocationModule({ selectedLanguage }: { selectedLanguage: string }) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.en
  const [locationInput, setLocationInput] = useState("")
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeLocation = async () => {
    if (!locationInput.trim()) return

    setIsAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      setAnalysisResult({
        location: locationInput,
        coordinates: "19.0760° N, 72.8777° E",
        elevation: "14 meters above sea level",
        riskLevel: "High",
        drainageCapacity: "Limited - 45mm/hr",
        historicalData: "3 major floods in last 5 years",
        currentWeather: "Heavy rainfall - 35mm/hr",
        evacuationRoutes: ["Route A: Via Eastern Express Highway", "Route B: Via Western Express Highway"],
        emergencyContacts: ["Fire: 101", "Police: 100", "Disaster Management: 108"],
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Globe className="h-6 w-6 text-cyan-400" />
            <span>{t.modules.location.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Location Input */}
          <div>
            <label className="text-white font-semibold mb-2 block">Enter Location</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder="Enter city, address, or coordinates..."
                className="flex-1 bg-slate-700 text-white border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button
                onClick={analyzeLocation}
                disabled={!locationInput.trim() || isAnalyzing}
                className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
          </div>

          {/* Analysis Results */}
          {analysisResult && (
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Location Analysis Results</h4>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">Location Details</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-400">Coordinates:</span>
                      <span className="text-white ml-2">{analysisResult.coordinates}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Elevation:</span>
                      <span className="text-white ml-2">{analysisResult.elevation}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">Risk Assessment</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Risk Level:</span>
                      <Badge
                        className={
                          analysisResult.riskLevel === "High"
                            ? "bg-red-500/20 text-red-400"
                            : analysisResult.riskLevel === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                        }
                      >
                        {analysisResult.riskLevel}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-slate-400">Drainage:</span>
                      <span className="text-white ml-2">{analysisResult.drainageCapacity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Data */}
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Historical Data</h5>
                <p className="text-slate-300 text-sm">{analysisResult.historicalData}</p>
              </div>

              {/* Current Conditions */}
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Current Weather</h5>
                <p className="text-slate-300 text-sm">{analysisResult.currentWeather}</p>
              </div>

              {/* Emergency Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">Evacuation Routes</h5>
                  <ul className="space-y-1 text-sm">
                    {analysisResult.evacuationRoutes.map((route: string, index: number) => (
                      <li key={index} className="text-slate-300">
                        • {route}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">Emergency Contacts</h5>
                  <ul className="space-y-1 text-sm">
                    {analysisResult.emergencyContacts.map((contact: string, index: number) => (
                      <li key={index} className="text-slate-300">
                        • {contact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
