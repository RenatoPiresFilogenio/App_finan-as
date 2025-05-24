"use client";
import { motion } from "framer-motion";
import Styles from "./style.module.scss";
import { LogOutIcon} from 'lucide-react'
import {HandCoins} from 'lucide-react'
import Link from "next/link"
export default function Header() {
  return (
    <motion.header
      className={Styles.home_header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/home"><h1>SaveMoney <HandCoins/> </h1></Link>

        <section className={Styles.total}>
            
        </section>

      <div className={Styles.div_btns}>
        <Link href="/home/category">
        <button>Categorias</button>
        </Link>
        <Link href="/item">
        <button>Items</button>
        </Link>
        <Link href="/"><button><LogOutIcon/></button></Link>
      </div>
    </motion.header>
  );
}