import React from "react";
import ReactDOM from "react-dom/client";
import { observer } from "mobx-react-lite";
import { InputGroup } from "@blueprintjs/core";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Workspace } from "polotno/canvas/workspace";
import { SidePanel } from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { createStore } from "polotno/model/store";
import { getImageSize } from "polotno/utils/image";

// import all default sections
// we will not use all of them in the demo
// just to show what we have
import {
  LayersSection,
  TextSection,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  SizeSection
} from "polotno/side-panel";
//
import { SectionTab } from "polotno/side-panel";
import { ImagesGrid } from "polotno/side-panel/images-grid";
// import our own icon
import MdPhotoLibrary from "@meronex/icons/md/MdPhotoLibrary";

const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.com/cabinet
  key: "1mLN8QXUEB4-ZbdIlG85",
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true
});

store.addPage();

export const PhotosPanel = observer(({ store }) => {
  const [images, setImages] = React.useState([]);

  async function loadImages() {
    // here we should implement your own API requests
    setImages([]);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // for demo images are hard coded
    // in real app here will be something like JSON structure
    setImages([
      { url: "./polotno(9).png" },
      { url: "./polotno(8).png" },
      { url: "./polotno(7).png" },
      { url: "./polotno(6).png" },
      { url: "./polotno(5).png" },
      { url: "./polotno(4).png" },
      { url: "./polotno(3).png" },
      { url: "./polotno(2).png" },
      { url: "./polotno(11).png" },
      { url: "./polotno(10).png" },
      { url: "./polotno(29).png" },
      { url: "./polotno(30).png" },
      { url: "./polotno(31).png" },
      { url: "./polotno(32).png" },
      { url: "./polotno(33).png" },
      { url: "./polotno(34).png" },
      { url: "./polotno(35).png" },
      { url: "./polotno(36).png" },
      { url: "./polotno(37).png" },
      { url: "./polotno(38).png" },
      { url: "./polotno(39).png" },
      { url: "./polotno(40).png" },
      { url: "./polotno(41).png" },
      { url: "./polotno(42).png" },
      { url: "./polotno(43).png" },
      { url: "./polotno(44).png" },
      { url: "./polotno(45).png" },
      { url: "./polotno(46).png" },
      { url: "./polotno(47).png" },
      { url: "./polotno(48).png" },
      { url: "./polotno(49).png" },
      { url: "./polotno(50).png" },
      { url: "./polotno(51).png" },
      { url: "./polotno(52).png" },
      { url: "./polotno(53).png" },
      { url: "./polotno(54).png" },
      { url: "./polotno(55).png" },
      { url: "./polotno(56).png" },
      { url: "./polotno(57).png" },
      { url: "./polotno(58).png" },
      { url: "./polotno(59).png" },
      { url: "./polotno(60).png" },
      { url: "./polotno(61).png" },
      { url: "./polotno(62).png" },
      { url: "./polotno(63).png" },
      { url: "./polotno(64).png" },
      { url: "./polotno(65).png" },
      { url: "./polotno(66).png" },
      { url: "./polotno(67).png" },
      { url: "./polotno(69).png" },
      { url: "./polotno(70).png" },
      { url: "./polotno(71).png" },
      { url: "./polotno(72).png" },
      { url: "./polotno(73).png" },
      { url: "./polotno(74).png" },
      { url: "./polotno(75).png" },
      { url: "./polotno(76).png" },
      { url: "./polotno(77).png" },
      { url: "./polotno(78).png" },
      { url: "./polotno(79).png" },
      { url: "./polotno(80).png" },
      { url: "./polotno(81).png" },
      { url: "./polotno(82).png" },
      { url: "./polotno(83).png" },
      { url: "./polotno(84).png" },
      { url: "./polotno(85).png" },
      { url: "./polotno(86).png" },
      { url: "./polotno(87).png" },
      { url: "./polotno(99).png" },
      { url: "./polotno(100).png" },
      { url: "./polotno(101).png" },
      { url: "./polotno(88).png" },
      { url: "./polotno(89).png" },
      { url: "./polotno(90).png" },
      { url: "./polotno(91).png" },
      { url: "./polotno(92).png" },
      { url: "./polotno(93).png" },
      { url: "./polotno(94).png" },
      { url: "./polotno(95).png" },
      { url: "./polotno(96).png" },
      { url: "./polotno(97).png" },
      { url: "./polotno(98).png" },
      { url: "./polotno(215).png" },
      { url: "./polotno(216).png" },
      { url: "./polotno(217).png" },
      { url: "./polotno(218).png" },
      { url: "./polotno(219).png" },
      { url: "./polotno(220).png" },
      { url: "./polotno(221).png" },
      { url: "./polotno(222).png" },
      { url: "./polotno(223).png" },
      { url: "./polotno(224).png" },
      { url: "./polotno(225).png" },
      { url: "./polotno(226).png" },
      { url: "./polotno(227).png" },
      { url: "./polotno(228).png" },
      { url: "./polotno(229).png" },
      { url: "./polotno(230).png" },
      { url: "./polotno(231).png" },
      { url: "./polotno(232).png" },
      { url: "./polotno(233).png" },
      { url: "./polotno(234).png" },
      { url: "./polotno(235).png" },
      { url: "./polotno(236).png" },
      { url: "./polotno(237).png" },
      { url: "./polotno(238).png" },
      { url: "./polotno(239).png" },
      { url: "./polotno(240).png" },
      { url: "./polotno(241).png" },
      { url: "./polotno(242).png" },
      { url: "./polotno(243).png" },
      { url: "./polotno(244).png" },
      { url: "./polotno(245).png" },
      { url: "./polotno(246).png" }
    ]);
  }

  React.useEffect(() => {
    loadImages();
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <InputGroup
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => {
          loadImages();
        }}
        style={{
          marginBottom: "20px"
        }}
      />
      <p>Shields</p>
      {/* you can create yur own custom component here */}
      {/* but we will use built-in grid component */}
      <ImagesGrid
        images={images}
        getPreview={(image) => image.url}
        onSelect={async (image, pos) => {
          const { width, height } = await getImageSize(image.url);
          store.activePage.addElement({
            type: "image",
            src: image.url,
            width,
            height,
            // if position is available, show image on dropped place
            // or just show it in the center
            x: pos ? pos.x : store.width / 2 - width / 2,
            y: pos ? pos.y : store.height / 2 - height / 2
          });
        }}
        rowsNumber={2}
        isLoading={!images.length}
        loadMore={false}
      />
    </div>
  );
});

// define the new custom section
const CustomPhotos = {
  name: "Shields",
  Tab: (props) => (
    <SectionTab name="Shields" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: PhotosPanel
};
export const AnimalsSection = observer(({ store }) => {
  const [images, setImages] = React.useState([]);

  async function loadImages() {
    // here we should implement your own API requests
    setImages([]);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // for demo images are hard coded
    // in real app here will be something like JSON structure
    setImages([
      { url: "./Free_Heraldic_Wolf_Vector.png" },
      { url: "./Free_Heraldic_Wolf_Vector (6).png" },
      { url: "./Free_Heraldic_Wolf_Vector (5).png" },
      { url: "./Free_Heraldic_Wolf_Vector (4).png" },
      { url: "./Free_Heraldic_Wolf_Vector (3).png" },
      { url: "./Free_Heraldic_Wolf_Vector (2).png" },
      { url: "./Free_Heraldic_Wolf_Vector (1).png" },
      { url: "./Free_Dragon_Tattoo_Vector.png" },
      { url: "./Free_Dragon_Tattoo_Vector (1).png" },
      { url: "./Free_Dragon_Tattoo_Vector (2).png" },
      { url: "./Free_Dragon_Tattoo_Vector (3).png" },
      { url: "./Free_Dragon_Tattoo_Vector (4).png" },
      { url: "./Free_Dragon_Tattoo_Vector (5).png" },
      { url: "./Free_Dragon_Head_Vector (1).png" },
      { url: "./Free_Dragon_Head_Vector (2).png" },
      { url: "./Free_Dragon_Head_Vector (3).png" },
      { url: "./Free_Dragon_Head_Vector.png" },
      { url: "./Free_Heraldic_Deer_Vector.png" },
      { url: "./Free_Heraldic_Deer_Vector (1).png" },
      { url: "./Free_Heraldic_Deer_Vector (2).png" },
      { url: "./Free_Heraldic_Deer_Vector (3).png" },
      { url: "./Free_Heraldic_Deer_Vector (4).png" },
      { url: "./Free_Heraldic_Deer_Vector (5).png" },
      { url: "./Free_Heraldic_Deer_Vector (6).png" },
      { url: "./Free_Heraldic_Deer_Vector (7).png" },
      { url: "./Free_Heraldic_Deer_Vector (8).png" },
      { url: "./Free_Heraldic_Deer_Vector (9).png" },
      { url: "./Free_Heraldic_Eagle_Vector.png" },
      { url: "./Free_Heraldic_Eagle_Vector (1).png" },
      { url: "./Free_Heraldic_Eagle_Vector (2).png" },
      { url: "./Free_Heraldic_Eagle_Vector (3).png" },
      { url: "./Free_Heraldic_Eagle_Vector (4).png" },
      { url: "./Free_Heraldic_Eagle_Vector (5).png" },
      { url: "./Free_Heraldic_Eagle_Vector (6).png" },
      { url: "./Free_Heraldic_Eagle_Vector (8).png" },
      { url: "./Free_Heraldic_Eagle_Vector (9).png" },
      { url: "./852px-Heraldic_Lion_01.svg.png" },
      { url: "./812px-Heraldic_Lion_02.svg.png" },
      { url: "./Heraldic_Lion_03.svg.png" },
      { url: "./396px-Heraldic_Lion_04.svg.png" },
      { url: "./Heraldic_Lion_05.svg.png" },
      { url: "./Heraldic_Lion_06.svg.png" },
      { url: "./Heraldic_Lion_07.svg.png" },
      { url: "./Heraldic_Lion_08.svg.png" },
      { url: "./Heraldic_Lion_11.svg.png" },
      { url: "./Heraldic_Lion_13.svg.png" },
      { url: "./Heraldic_Lion_16.svg.png" },
      { url: "./Heraldic_Lion_17.svg.png" },
      { url: "./Heraldic_Lion_18.svg.png" },
      { url: "./Bear_heraldic_-_Republic_of_Karelia.svg.png" },
      { url: "./heraldicart/boar-passant-3-outline.png" },
      { url: "./heraldicart/boreyne-passant-outline.png" },
      { url: "./heraldicart/bull-passant-4-outline.png" },
      { url: "./heraldicart/calygreyhound-statant-outline.png" },
      { url: "./heraldicart/camel-couchant-2-outline.png" },
      { url: "./heraldicart/caretyne-passant-outline.png" },
      { url: "./heraldicart/chatloup-winged-sejant-outline.png" },
      { url: "./heraldicart/chimera-outline.png" },
      { url: "./heraldicart/doe-rampant-1-outline.png" },
      { url: "./polotno(247).png" },
      { url: "./polotno(248).png" },
      { url: "./polotno(249).png" },
      { url: "./polotno(250).png" },
      { url: "./polotno(251).png" },
      { url: "./polotno(252).png" },
      { url: "./polotno(253).png" },
      { url: "./polotno(254).png" },
      { url: "./polotno(255).png" },
      { url: "./polotno(256).png" },
      { url: "./polotno(257).png" },
      { url: "./polotno(258).png" },
      { url: "./polotno(259).png" },
      { url: "./polotno(260).png" },
      { url: "./polotno(261).png" },
      { url: "./polotno(262).png" },
      { url: "./polotno(263).png" },
      { url: "./polotno(264).png" },
      { url: "./polotno(265).png" },
      { url: "./polotno(266).png" },
      { url: "./polotno(267).png" },
      { url: "./polotno(268).png" },
      { url: "./polotno(269).png" },
      { url: "./polotno(270).png" },
      { url: "./polotno(271).png" },
      { url: "./polotno(272).png" },
      { url: "./polotno(273).png" },
      { url: "./polotno(274).png" },
      { url: "./polotno(275).png" },
      { url: "./polotno(276).png" },
      { url: "./polotno(277).png" },
      { url: "./polotno(278).png" },
      { url: "./polotno(279).png" },
      { url: "./polotno(280).png" },
      { url: "./polotno(281).png" },
      { url: "./polotno(282).png" },
      { url: "./polotno(283).png" },
      { url: "./polotno(284).png" },
      { url: "./polotno(285).png" },
      { url: "./polotno(286).png" },
      { url: "./polotno(287).png" },
      { url: "./polotno(288).png" },
      { url: "./polotno(289).png" },
      { url: "./polotno(290).png" },
      { url: "./polotno(291).png" },
      { url: "./polotno(292).png" },
      { url: "./polotno(293).png" },
      { url: "./polotno(294).png" },
      { url: "./polotno(295).png" },
      { url: "./polotno(296).png" },
      { url: "./polotno(297).png" }
    ]);
  }

  React.useEffect(() => {
    loadImages();
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <InputGroup
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => {
          loadImages();
        }}
        style={{
          marginBottom: "20px"
        }}
      />
      <h1>Animals</h1>
      {/* you can create yur own custom component here */}
      {/* but we will use built-in grid component */}

      <ImagesGrid
        images={images}
        getPreview={(image) => image.url}
        onSelect={async (image, pos) => {
          const { width, height } = await getImageSize(image.url);
          store.activePage.addElement({
            type: "image",
            src: image.url,
            width,
            height,
            // if position is available, show image on dropped place
            // or just show it in the center
            x: pos ? pos.x : store.width / 2 - width / 2,
            y: pos ? pos.y : store.height / 2 - height / 2
          });
        }}
        rowsNumber={2}
        isLoading={!images.length}
        loadMore={false}
      />
    </div>
  );
});

// define the new custom section
const Animals = {
  name: "Animals",
  Tab: (props) => (
    <SectionTab name="Animals" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: AnimalsSection
};

export const customweapons = observer(({ store }) => {
  const [images, setImages] = React.useState([]);

  async function loadImages() {
    // here we should implement your own API requests
    setImages([]);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // for demo images are hard coded
    // in real app here will be something like JSON structure
    setImages([
      { url: "./weapons/axe-1-mono.png" },
      { url: "./weapons/axe-2-mono.png" },
      { url: "./weapons/battle-axe-1-mono.png" },
      { url: "./weapons/crossbow-2-mono.png" },
      { url: "./weapons/crossbow-3-mono.png" },
      { url: "./weapons/crossbow-stock-1-mono.png" },
      { url: "./weapons/cutlass-mono.png" },
      { url: "./weapons/dagger-3-mono.png" },
      {
        url: "./weapons/daggers-three-conjoined-in-pall-at-the-hilts-mono.png"
      },
      { url: "./weapons/falchion-mono.png" },
      { url: "./weapons/fauchard-1-mono.png" },
      { url: "./weapons/fauchard-2-mono.png" },
      { url: "./weapons/gauntlet-clenched-1-mono.png" },
      { url: "./weapons/gauntlet-mono.png" },
      { url: "./weapons/hammer-war-1-mono.png" },
      { url: "./weapons/hammer-war-2-mono.png" },
      { url: "./weapons/helm-close-1-mono.png" },
      { url: "./weapons/helm-close-2-mono.png" },
      { url: "./weapons/helm-close-3-mono.png" },
      { url: "./weapons/helm-close-affronty-1-mono.png" },
      { url: "./weapons/helm-corinthian-mono.png" },
      { url: "./weapons/helm-morion-mono.png" },
      { url: "./weapons/helm-ocular-affronty-mono.png" },
      { url: "./weapons/helm-winged-great-affronty-wings-elevated-mono.png" },
      { url: "./weapons/lance-1-mono.png" },
      { url: "./weapons/lance-2-mono.png" },
      { url: "./weapons/scythe-war-1-mono.png" },
      { url: "./weapons/scythe-war-2-mono.png" },
      { url: "./weapons/spear-3-mono.png" },
      { url: "./weapons/spear-6-mono.png" },
      { url: "./weapons/spearhead-2-mono.png" },
      { url: "./weapons/sword-1-mono.png" },
      { url: "./weapons/sword-2-mono.png" },
      { url: "./weapons/sword-3-mono.png" },
      { url: "./weapons/sword-4-mono.png" },
      { url: "./weapons/sword-5-mono.png" },
      { url: "./weapons/sword-6-mono.png" }
    ]);
  }

  React.useEffect(() => {
    loadImages();
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <InputGroup
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => {
          loadImages();
        }}
        style={{
          marginBottom: "20px"
        }}
      />
      <h1>Weapons</h1>

      {/* you can create yur own custom component here */}
      {/* but we will use built-in grid component */}

      <ImagesGrid
        images={images}
        getPreview={(image) => image.url}
        onSelect={async (image, pos) => {
          const { width, height } = await getImageSize(image.url);
          store.activePage.addElement({
            type: "image",
            src: image.url,
            width,
            height,
            // if position is available, show image on dropped place
            // or just show it in the center
            x: pos ? pos.x : store.width / 2 - width / 2,
            y: pos ? pos.y : store.height / 2 - height / 2
          });
        }}
        rowsNumber={2}
        isLoading={!images.length}
        loadMore={false}
      />
    </div>
  );
});

// define the new custom section
const Weapons = {
  name: "Weapons",
  Tab: (props) => (
    <SectionTab name="Weapons" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: customweapons
};

export const exterior = observer(({ store }) => {
  const [images, setImages] = React.useState([]);

  async function loadImages() {
    // here we should implement your own API requests
    setImages([]);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // for demo images are hard coded
    // in real app here will be something like JSON structure
    setImages([
      { url: "./crowns/polotno(104).png" },
      { url: "./crowns/polotno(105).png" },
      { url: "./crowns/polotno(106).png" },
      { url: "./crowns/polotno(107).png" },
      { url: "./crowns/polotno(108).png" },
      { url: "./crowns/polotno(109).png" },
      { url: "./crowns/polotno(110).png" },
      { url: "./crowns/polotno(111).png" },
      { url: "./crowns/polotno(112).png" },
      { url: "./crowns/polotno(113).png" },
      { url: "./crowns/polotno(114).png" },
      { url: "./crowns/polotno(115).png" },
      { url: "./crowns/polotno(116).png" },
      { url: "./crowns/polotno(117).png" },
      { url: "./crowns/polotno(118).png" },
      { url: "./crowns/polotno(119).png" },
      { url: "./crowns/polotno(140).png" },
      { url: "./crowns/polotno(141).png" },
      { url: "./crowns/polotno(142).png" },
      { url: "./crowns/polotno(143).png" },
      { url: "./crowns/polotno(144).png" },
      { url: "./crowns/polotno(145).png" },
      { url: "./crowns/polotno(146).png" },
      { url: "./crowns/polotno(147).png" },
      { url: "./crowns/polotno(148).png" },
      { url: "./crowns/polotno(149).png" },
      { url: "./crowns/polotno(150).png" },
      { url: "./crowns/polotno(151).png" },
      { url: "./crowns/polotno(152).png" },
      { url: "./crowns/polotno(153).png" },
      { url: "./crowns/polotno(154).png" },
      { url: "./crowns/polotno(155).png" },
      { url: "./crowns/polotno(156).png" },
      { url: "./crowns/polotno(157).png" },
      { url: "./crowns/polotno(158).png" },
      { url: "./crowns/polotno(159).png" },
      { url: "./crowns/polotno(160).png" },
      { url: "./mantling/polotno(161).png" },
      { url: "./mantling/polotno(162).png" },
      { url: "./mantling/polotno(163).png" },
      { url: "./mantling/polotno(164).png" },
      { url: "./mantling/polotno(165).png" },
      { url: "./mantling/polotno(166).png" },
      { url: "./mantling/polotno(167).png" },
      { url: "./mantling/polotno(168).png" },
      { url: "./mantling/polotno(169).png" },
      { url: "./mantling/polotno(170).png" },
      { url: "./mantling/polotno(171).png" },
      { url: "./mantling/polotno(172).png" },
      { url: "./mantling/polotno(173).png" },
      { url: "./mantling/polotno(174).png" },
      { url: "./mantling/polotno(175).png" },
      { url: "./mantling/polotno(176).png" },
      { url: "./mantling/polotno(177).png" },
      { url: "./mantling/polotno(178).png" },
      { url: "./mantling/polotno(179).png" },
      { url: "./mantling/polotno(180).png" },
      { url: "./mantling/polotno(181).png" },
      { url: "./mantling/polotno(182).png" },
      { url: "./mantling/polotno(183).png" },
      { url: "./mantling/polotno(184).png" },
      { url: "./mantling/polotno(185).png" },
      { url: "./mantling/polotno(186).png" },
      { url: "./mantling/polotno(187).png" },
      { url: "./mantling/polotno(188).png" },
      { url: "./mantling/polotno(189).png" },
      { url: "./mantling/polotno(190).png" },
      { url: "./mantling/polotno(191).png" },
      { url: "./mantling/polotno(192).png" },
      { url: "./mantling/polotno(193).png" },
      { url: "./mantling/polotno(194).png" },
      { url: "./mantling/polotno(195).png" },
      { url: "./mantling/polotno(196).png" },
      { url: "./mantling/polotno(197).png" },
      { url: "./mantling/polotno(198).png" },
      { url: "./mantling/polotno(199).png" },
      { url: "./mantling/polotno(200).png" },
      { url: "./mantling/polotno(201).png" },
      { url: "./mantling/polotno(202).png" },
      { url: "./mantling/polotno(203).png" },
      { url: "./mantling/polotno(204).png" },
      { url: "./mantling/polotno(205).png" },
      { url: "./mantling/polotno(206).png" },
      { url: "./mantling/polotno(207).png" },
      { url: "./mantling/polotno(208).png" },
      { url: "./mantling/polotno(209).png" },
      { url: "./mantling/polotno(210).png" },
      { url: "./mantling/polotno(211).png" },
      { url: "./mantling/polotno(212).png" },
      { url: "./mantling/polotno(213).png" },
      { url: "./mantling/polotno(214).png" }
    ]);
  }

  React.useEffect(() => {
    loadImages();
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <InputGroup
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => {
          loadImages();
        }}
        style={{
          marginBottom: "20px"
        }}
      />
      <h1>Weapons</h1>

      {/* you can create yur own custom component here */}
      {/* but we will use built-in grid component */}

      <ImagesGrid
        images={images}
        getPreview={(image) => image.url}
        onSelect={async (image, pos) => {
          const { width, height } = await getImageSize(image.url);
          store.activePage.addElement({
            type: "image",
            src: image.url,
            width,
            height,
            // if position is available, show image on dropped place
            // or just show it in the center
            x: pos ? pos.x : store.width / 2 - width / 2,
            y: pos ? pos.y : store.height / 2 - height / 2
          });
        }}
        rowsNumber={2}
        isLoading={!images.length}
        loadMore={false}
      />
    </div>
  );
});

// define the new custom section
const Exterior = {
  name: "Exterior",
  Tab: (props) => (
    <SectionTab name="Exterior" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: exterior
};
const sections = [
  TextSection,
  CustomPhotos,
  Animals,
  Weapons,
  Exterior,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  // we will replace default resize with our own
  SizeSection,
  LayersSection
];

export const App = () => {
  return (
    <PolotnoContainer className="polotno-app-container">
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} defaultSection="photos" />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
