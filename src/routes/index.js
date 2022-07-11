import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index", {title: "Primer sitio con Node"}));
router.get("/about", (req, res) => res.render("about", {title: "About Me"}));
router.get("/contact", (req, res) => res.render("contact", {title: "Contact Page"}));
router.get("/periodico", (req, res) => res.render("periodico", {title: "Periódico"}));
router.get("/marvel", (req, res) => res.render("marvel", {title: "Marvel"}));

export default router;
