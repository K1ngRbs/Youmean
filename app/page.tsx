import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, FileText, TrendingUp, Users, Zap, CheckCircle, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function YoumeanLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
                src="/Favicon_Youmean.jpeg"
                alt="Logo Youmean"
                width={32}
                height={32}
                className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">Youmean</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">
              Cas d'usage
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tarifs
            </Link>
            <Button variant="outline" size="sm">
              Connexion
            </Button>
            <Button size="sm">Essai gratuit</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            Nouveau : Analyse de sentiment en temps réel
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformez vos données textuelles en visuels <span className="text-blue-600">en un clic</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploitez la puissance du traitement du langage naturel pour analyser, visualiser et comprendre vos données
            textuelles. Découvrez des insights cachés dans vos commentaires, enquêtes et documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Voir la démo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Aucune carte de crédit requise • Configuration en 2 minutes</p>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
              <div className="bg-gray-900 px-6 py-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">youmean.app/dashboard</span>
              </div>
              <Image
                src="./public/dashboard.png?height=600&width=1000"
                alt="Interface Youmean montrant des visualisations de données textuelles"
                width={1000}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités puissantes, utilisation simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des outils d'analyse avancés conçus pour être accessibles à tous, sans expertise technique requise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Visualisations automatiques</CardTitle>
                <CardDescription>
                  Générez instantanément des graphiques, nuages de mots et tableaux de bord à partir de vos données
                  textuelles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Analyse de sentiment</CardTitle>
                <CardDescription>
                  Comprenez les émotions et opinions dans vos textes avec notre IA d'analyse de sentiment avancée.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Résumés automatiques</CardTitle>
                <CardDescription>
                  Extrayez les points clés de longs documents et générez des résumés pertinents en quelques secondes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                      src="/Favicon_Youmean.jpeg"
                      alt="Logo Youmean"
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                  />
                </div>
                <CardTitle>Détection de thèmes</CardTitle>
                <CardDescription>
                  Identifiez automatiquement les sujets principaux et tendances dans vos corpus de textes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Traitement en temps réel</CardTitle>
                <CardDescription>
                  Analysez vos données au fur et à mesure qu'elles arrivent avec notre pipeline de traitement en temps
                  réel.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Collaboration d'équipe</CardTitle>
                <CardDescription>
                  Partagez vos analyses et collaborez avec votre équipe sur des projets d'analyse de données.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Adapté à tous les métiers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment Youmean transforme le travail de différentes équipes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Équipes Produit</h3>
                  <p className="text-gray-600">
                    Analysez les retours utilisateurs, identifiez les demandes de fonctionnalités et priorisez votre
                    roadmap produit basée sur des données réelles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing</h3>
                  <p className="text-gray-600">
                    Mesurez l'impact de vos campagnes, analysez les mentions sur les réseaux sociaux et optimisez votre
                    stratégie de contenu.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ressources Humaines</h3>
                  <p className="text-gray-600">
                    Analysez les enquêtes de satisfaction, identifiez les problèmes récurrents et améliorez l'expérience
                    collaborateur.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                      src="/Favicon_Youmean.jpeg"
                      alt="Logo Youmean"
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Client</h3>
                  <p className="text-gray-600">
                    Catégorisez automatiquement les tickets, identifiez les problèmes fréquents et améliorez la qualité
                    de votre support.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Équipes utilisant Youmean pour analyser des données textuelles"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tarification simple et transparente</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Commencez gratuitement, évoluez selon vos besoins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Gratuit</span>
                </div>
                <CardDescription className="mt-2">Parfait pour découvrir Youmean</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>1 000 textes analysés/mois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Visualisations de base</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Analyse de sentiment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Support par email</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Commencer gratuitement
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500">Plus populaire</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">49€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <CardDescription className="mt-2">Pour les équipes en croissance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>50 000 textes analysés/mois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Toutes les visualisations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>API et intégrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Collaboration d'équipe</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
                <Button className="w-full">Essayer 14 jours gratuits</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Sur mesure</span>
                </div>
                <CardDescription className="mt-2">Pour les grandes organisations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Volume illimité</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Déploiement on-premise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Sécurité avancée</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Support dédié</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Formation personnalisée</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer vos données textuelles ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'équipes qui utilisent déjà Youmean pour prendre de meilleures décisions basées sur
            leurs données textuelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Planifier une démo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Quels types de données textuelles puis-je analyser ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Youmean peut analyser tous types de textes : commentaires clients, enquêtes, emails, documents, posts
                  sur les réseaux sociaux, transcriptions d'appels, etc. Nous supportons plus de 50 langues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Mes données sont-elles sécurisées ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolument. Nous utilisons un chiffrement de niveau bancaire, nos serveurs sont certifiés SOC 2, et
                  nous sommes conformes au RGPD. Vos données ne sont jamais partagées avec des tiers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Puis-je intégrer Youmean avec mes outils existants ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui, nous proposons une API REST complète et des intégrations natives avec les outils populaires comme
                  Slack, Microsoft Teams, Google Sheets, et bien d'autres.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Ai-je besoin de compétences techniques pour utiliser Youmean ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Pas du tout ! Youmean est conçu pour être utilisé par tous, sans compétences techniques. Il suffit
                  d'importer vos données et les visualisations se génèrent automatiquement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Puis-je annuler mon abonnement à tout moment ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui, vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord. Aucun
                  engagement, aucune pénalité.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                    src="/Favicon_Youmean.jpeg"
                    alt="Logo Youmean"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                />
                <span className="text-2xl font-bold">Youmean</span>
              </div>
              <p className="text-gray-400">Transformez vos données textuelles en insights visuels avec l'IA.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Intégrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cas d'usage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Presse
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Youmean. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
