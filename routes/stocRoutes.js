import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Stoc from '../models/stocModel.js';

const stocRouter = express.Router();

stocRouter.get('/', async (req, res) => {
  const stocuri = await Stoc.find();
  res.send(stocuri);
});

stocRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newStoc = new Stoc({
      codINV: req.body.codINV,
      codPROD: req.body.codPROD,
      numeProdus: req.body.numeProdus,
      responsabilProdus1: req.body.responsabilProdus1,
      responsabilProdus2: req.body.responsabilProdus2,
      responsabilProdus3: req.body.responsabilProdus3,
      responsabilProdus4: req.body.responsabilProdus4,
      categorieProdus: req.body.categorieProdus,
      localizareProdus: req.body.localizareProdus,
      adresaProdus: req.body.adresaProdus,
      stocINIT: req.body.stocINIT,
      stocCUR: req.body.stocCUR,
      dataIntroducereProdus: req.body.dataIntroducereProdus,
      urmatorulServiceProdus: req.body.urmatorulServiceProdus,
      user1: req.body.user1 || req.user1._id,
      user2: req.body.user2
        ? req.body.user2
        : req.user2
        ? req.user2._id
        : undefined,
      user3: req.body.user3
        ? req.body.user3
        : req.user3
        ? req.user3._id
        : undefined,
      user4: req.body.user4
        ? req.body.user4
        : req.user4
        ? req.user4._id
        : undefined,
    });

    const stoc = await newStoc.save();
    res.send({ message: 'Stocul a fost adăugat', stoc });
  })
);

stocRouter.put(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const stocId = req.params.id;
    const stoc = await Stoc.findById(stocId);
    if (stoc) {
      (stoc.codINIT = req.body.codINIT),
        (stoc.codPROD = req.body.codPROD),
        (stoc.stocINIT = req.body.stocINIT),
        (stoc.stocCUR = req.body.stocCUR),
        (stoc.numeProdus = req.body.numeProdus),
        (stoc.categorieProdus = req.body.categorieProdus),
        (stoc.localizareProdus = req.body.localizareProdus),
        (stoc.adresaProdus = req.body.adresaProdus),
        (stoc.responsabilProdus1 = req.body.responsabilProdus1),
        (stoc.responsabilProdus2 = req.body.responsabilProdus2),
        (stoc.responsabilProdus3 = req.body.responsabilProdus3),
        (stoc.responsabilProdus4 = req.body.responsabilProdus4),
        (stoc.user1 = req.body.user1),
        (stoc.user2 = req.body.user2),
        (stoc.user3 = req.body.user3),
        (stoc.user4 = req.body.user4),
        (stoc.dataIntroducereProdus = req.body.dataIntroducereProdus),
        (stoc.urmatorulServiceProdus = req.body.urmatorulServiceProdus),
        await stoc.save();
      res.send({ message: 'Înregistrarea a fost actualizată' });
    } else {
      res.status(404).send({ message: 'Stocul nu a fost găsit' });
    }
  })
);

stocRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const stoc = await Stoc.findById(req.params.id);
    if (stoc) {
      await stoc.remove();
      res.send({ message: 'Stocul a fost șters' });
    } else {
      res.status(404).send({ message: 'Stocul nu a fost găsit' });
    }
  })
);

stocRouter.get('/nume/:numeProdus', async (req, res) => {
  const stoc = await Stoc.findOne({ numeProdus: req.params.numeProdus });

  if (stoc) {
    res.send(stoc);
  } else {
    res.status(404).send({ message: 'Stocul nu a fost gasit' });
  }
});

stocRouter.get('/:id', async (req, res) => {
  const stoc = await Stoc.findById(req.params.id);
  if (stoc) {
    res.send(stoc);
  } else {
    res.status(404).send({ message: 'Stocul nu a fost gasit' });
  }
});

export default stocRouter;
