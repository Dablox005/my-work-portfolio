// page.tsx
"use client"
import * as React from "react";
import Homepage from '@/components/Homepage'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Service from '@/components/Service'
import About from '@/components/About'

import styles from "@/src/style";

export default function Home() {
  return (
      <section className={`bg-zinc-800 ${styles.paddingX}`}>
        <Homepage />
        <About />
        <Service />
        <Projects />
        <Contact />
      </section>
  )
}