import * as pageController from '../controllers/pageController.js'; // Dosya uzantısını kontrol ederek kullanın
import express from 'express';
const router = express.Router();

router.route("/").get(pageController.getHomePage);

router.route("/about").get(pageController.getAboutPage);
router.route("/bim").get(pageController.getBimPage);
router.route("/cad").get(pageController.getCadManPage);
router.route("/software").get(pageController.getSoftDevPage);



export default router;