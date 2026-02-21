"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Heart, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { images } from "@/config/images"

interface HeaderProps {
  activeSection: string
  scrollToSection?: (sectionId: string) => void
}

export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopAboutDropdownOpen, setDesktopAboutDropdownOpen] = useState(false)
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false)
  const [desktopPublicationsDropdownOpen, setDesktopPublicationsDropdownOpen] = useState(false)
  const [mobilePublicationsDropdownOpen, setMobilePublicationsDropdownOpen] = useState(false)
  const { t, isRTL } = useLanguage()
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null)
  const desktopPublicationsDropdownRef = useRef<HTMLDivElement | null>(null)

  const clearCloseTimeout = () => {
    if (!closeTimeoutRef.current) return
    clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = null
  }

  const openDesktopDropdown = (type: "about" | "publications") => {
    clearCloseTimeout()
    if (type === "about") {
      setDesktopPublicationsDropdownOpen(false)
      setDesktopAboutDropdownOpen(true)
      return
    }
    setDesktopAboutDropdownOpen(false)
    setDesktopPublicationsDropdownOpen(true)
  }

  const scheduleCloseDesktopDropdown = (type: "about" | "publications") => {
    clearCloseTimeout()
    closeTimeoutRef.current = setTimeout(() => {
      if (type === "about") {
        setDesktopAboutDropdownOpen(false)
      } else {
        setDesktopPublicationsDropdownOpen(false)
      }
    }, 150)
  }

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | PointerEvent) => {
      const targetNode = event.target as Node
      const clickedAbout = desktopDropdownRef.current?.contains(targetNode)
      const clickedPublications = desktopPublicationsDropdownRef.current?.contains(targetNode)
      if (clickedAbout || clickedPublications) return
      setDesktopAboutDropdownOpen(false)
      setDesktopPublicationsDropdownOpen(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopAboutDropdownOpen(false)
        setDesktopPublicationsDropdownOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const navigationItems = [
    { name: t("header.home"), id: "home", href: "/" },
    {
      name: t("header.about"),
      id: "about",
      href: "/about#about",
      hasDropdown: true,
      subItems: [
        { name: t("header.aboutMissionVision"), href: "/about#mission-vision" },
        { name: t("header.aboutCoreValues"), href: "/about#core-values" },
        { name: t("header.aboutBackground"), href: "/about/background" },
      ],
    },
    { name: t("header.programs"), id: "programs", href: "/programs" },
    { name: t("header.news"), id: "news", href: "/news" },
    { name: t("header.impact"), id: "impact", href: "/impact" },
    {
      name: "Publications",
      id: "publications",
      href: "/publications",
      hasDropdown: true,
      subItems: [
        { name: "Annual Impact and Financial Report", href: "/publications#annual-reports" },
        { name: "Books and Students Library", href: "/publications#library" },
        { name: "Student Narratives", href: "/publications#student-narratives" },
      ],
    },
    { name: "Enroll", id: "enroll", href: "/enroll" },
    { name: t("header.contact"), id: "contact", href: "/contact" },
  ]

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
    setMobileAboutDropdownOpen(false)
    setMobilePublicationsDropdownOpen(false)
  }

  return (
    <header className="relative bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-[100] transition-all duration-300 w-full overflow-y-visible">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 max-w-full">
        <div className={`flex items-center justify-between gap-2 min-w-0 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo Section */}
          <Link
            href="/"
            className={`flex items-center space-x-2 md:space-x-3 cursor-pointer flex-shrink-0 min-w-0 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
          >
            <Image
              src={images.logo}
              alt="Beyond Borders Empowerment Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
              priority
            />
            <div className={`hidden sm:flex flex-col min-w-0 max-w-[200px] md:max-w-none ${isRTL ? "text-right" : ""}`}>
              <h1 className="text-sm md:text-lg lg:text-xl font-bold text-brand-blue leading-tight truncate">
                Beyond Borders Empowerment
              </h1>
              <p className="text-[10px] md:text-xs lg:text-sm text-gray-600 truncate">
                {t("")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0 min-w-0">
            {navigationItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.id}
                  ref={item.id === "about" ? desktopDropdownRef : item.id === "publications" ? desktopPublicationsDropdownRef : undefined}
                  className="relative z-[100] overflow-visible"
                  onMouseEnter={
                    item.id === "about"
                      ? () => openDesktopDropdown("about")
                      : item.id === "publications"
                        ? () => openDesktopDropdown("publications")
                        : undefined
                  }
                  onMouseLeave={
                    item.id === "about"
                      ? () => scheduleCloseDesktopDropdown("about")
                      : item.id === "publications"
                        ? () => scheduleCloseDesktopDropdown("publications")
                        : undefined
                  }
                >
                  <div
                    className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 hover:bg-gray-100 flex items-center gap-1 whitespace-nowrap ${
                      activeSection === item.id
                        ? "text-red-600 bg-red-50 border-b-2 border-red-600"
                        : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    <Link href={item.href} className="leading-none truncate">
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        clearCloseTimeout()
                        if (item.id === "about") {
                          setDesktopPublicationsDropdownOpen(false)
                          setDesktopAboutDropdownOpen((v) => !v)
                          return
                        }
                        if (item.id === "publications") {
                          setDesktopAboutDropdownOpen(false)
                          setDesktopPublicationsDropdownOpen((v) => !v)
                        }
                      }}
                      className="p-1 rounded hover:bg-gray-200/60 transition-colors"
                      aria-label="Toggle About menu"
                      aria-expanded={item.id === "about" ? desktopAboutDropdownOpen : desktopPublicationsDropdownOpen}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          item.id === "about"
                            ? desktopAboutDropdownOpen
                              ? "rotate-180"
                              : ""
                            : desktopPublicationsDropdownOpen
                              ? "rotate-180"
                              : ""
                        }`}
                      />
                    </button>
                  </div>
                  {item.id === "about" && desktopAboutDropdownOpen && (
                    <div
                      className={`absolute top-full mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[110] ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      onMouseEnter={() => openDesktopDropdown("about")}
                      onMouseLeave={() => scheduleCloseDesktopDropdown("about")}
                    >
                      {item.subItems?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          onClick={() => setDesktopAboutDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.id === "publications" && desktopPublicationsDropdownOpen && (
                    <div
                      className={`absolute top-full mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[110] ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      onMouseEnter={() => openDesktopDropdown("publications")}
                      onMouseLeave={() => scheduleCloseDesktopDropdown("publications")}
                    >
                      {item.subItems?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          onClick={() => setDesktopPublicationsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 hover:bg-gray-100 whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-red-600 bg-red-50 border-b-2 border-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Section - Language Switcher and Donate Button */}
          <div className={`flex items-center space-x-2 md:space-x-4 flex-shrink-0 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
            <LanguageSwitcher />
            
            <Link href="/donate">
              <Button
                variant="destructive"
                size="sm"
                className="h-auto bg-red-600 hover:bg-red-700 text-white font-medium px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">{t("header.donate")}</span>
                <span className="sm:hidden whitespace-nowrap">{t("header.donateShort") || "Donate"}</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-11 w-11 min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col space-y-2 p-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.id}>
                    <div
                      className={`w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-between gap-2 ${
                        activeSection === item.id
                          ? "text-red-600 bg-red-50 border-l-4 border-red-600"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      } ${isRTL ? "text-right border-r-4 border-l-0 flex-row-reverse" : ""}`}
                    >
                      <Link href={item.href} onClick={handleMobileMenuClose} className="flex-1">
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          if (item.id === "about") {
                            setMobileAboutDropdownOpen((v) => !v)
                            return
                          }
                          if (item.id === "publications") {
                            setMobilePublicationsDropdownOpen((v) => !v)
                          }
                        }}
                        className="p-1 rounded hover:bg-gray-200/60 transition-colors"
                        aria-label="Toggle About menu"
                        aria-expanded={item.id === "about" ? mobileAboutDropdownOpen : mobilePublicationsDropdownOpen}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            item.id === "about"
                              ? mobileAboutDropdownOpen
                                ? "rotate-180"
                                : ""
                              : mobilePublicationsDropdownOpen
                                ? "rotate-180"
                                : ""
                          }`}
                        />
                      </button>
                    </div>
                    {item.id === "about" && mobileAboutDropdownOpen && (
                      <div className={`ml-4 mt-2 space-y-1 ${isRTL ? "mr-4 ml-0" : ""}`}>
                        {item.subItems?.map((subItem, idx) => (
                          <Link
                            key={idx}
                            href={subItem.href}
                            onClick={handleMobileMenuClose}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {item.id === "publications" && mobilePublicationsDropdownOpen && (
                      <div className={`ml-4 mt-2 space-y-1 ${isRTL ? "mr-4 ml-0" : ""}`}>
                        {item.subItems?.map((subItem, idx) => (
                          <Link
                            key={idx}
                            href={subItem.href}
                            onClick={handleMobileMenuClose}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={handleMobileMenuClose}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-red-600 bg-red-50 border-l-4 border-red-600"
                        : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                    } ${isRTL ? "text-right border-r-4 border-l-0" : ""}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
