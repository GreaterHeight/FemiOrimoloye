# Femi Orimoloye — Cinematic Executive Presence Film

## Status

**Production brief complete. Final film asset not yet rendered.** The requested final deliverable is a 24-second, eight-shot, seamless-loop MP4/H.264 film under 10 MB, with a unified grade and an editorial poster. The supplied portrait is already integrated as the first-paint and reduced-motion fallback. The production asset path is fixed as `/assets/video/femi-executive-hero.mp4`; adding the approved film at that path requires no page redesign.

## Creative concept — The people system, seen clearly

A restrained, photorealistic editorial film that moves from stillness and observation to deliberate action. It should communicate judgement, organisational context, human presence and strategic clarity, not generic corporate energy. The hero text remains the primary message. No dialogue, logos, visible readable screens or fabricated scenes that could be mistaken for real employer/client documentation.

**Core message:** People Strategy. Organizational Performance. Lasting Impact.

**Emotional tone:** composed, thoughtful, precise, confident, quietly ambitious.

**Visual palette:** Midnight Navy `#1B2230`, Royal Blue `#1749B8`, Powder Blue `#DCE8F8`, subtle warm natural skin tones. Burgundy `#C6404B` appears only as a tiny editorial accent in the web layer, not as a heavy film tint. Preserve photographic realism; avoid a blue wash over skin.

## Eight-shot outline (24 seconds total)

1. **0:00–0:03 — Arrival / environment.** Wide, natural contemporary office architecture at morning. Slow, nearly imperceptible lateral camera move. No visible company logos or identifiable premises. Subject not yet the focal point.
2. **0:03–0:06 — Presence.** Medium portrait of Femi in the approved wardrobe/source-photo context. A subtle camera push; relaxed but assured expression. Preserve identity exactly from authentic supplied imagery.
3. **0:06–0:09 — Observation.** Close details of a notebook, hand and pen beside an abstract, out-of-focus planning document. No legible fake text, charts or invented data.
4. **0:09–0:12 — Systems.** A wide, quiet meeting-room environment with abstract silhouettes in the deep background, no identifiable people or false event cues. Focus on space and decision-making, not staged handshakes.
5. **0:12–0:15 — Perspective.** Profile or three-quarter view of Femi looking across a window-lit space. Gentle parallax, natural skin texture, believable lens falloff.
6. **0:15–0:18 — Structure.** Close-up of hands arranging blank cards or neutral paper on a desk to imply organisation design. No readable labels, no fake dashboard, no impossible hand anatomy.
7. **0:18–0:21 — Connection.** Return to Femi in a composed medium portrait; soft daylight and restrained movement. Avoid presenting a generated person as an authentic source image; use supplied portrait assets for identity-critical shots.
8. **0:21–0:24 — Resolution / loop.** Match the opening architecture/light direction. Ease back into the opening frame with similar luminance and camera position to support a seamless loop. Keep visual detail subdued behind web headline.

## Realism and production constraints

- Prefer authentic supplied portrait assets for Femi; do not synthesize a different face or claim generated footage documents real employment, clients or offices.
- Any generated contextual B-roll must be understood as conceptual visual atmosphere, not documentary evidence.
- Photorealistic motion, plausible physics, realistic skin and fabric, natural eye behaviour, restrained depth of field, no over-sharpening, no plastic skin, no extra fingers, no duplicated people, no floating objects, no fake logos, no legible invented text, no cinematic teal/orange cliché, no heavy blue wash.
- No audio is needed for the hero. If an audio version is retained elsewhere, it must not autoplay with sound.
- Keep the left side comparatively calm for headline overlay. Protect the subject's face on desktop and mobile.

## Delivery specification

- Master: 1920×1080, 16:9, 24 or 25 fps, MP4/H.264, muted, 24 seconds, seamless loop.
- Web target: under 10 MB; optimise bitrate and remove audio track. Use fast-start / web-optimised MP4 where supported.
- Poster: `/assets/images/home/femi-hero-poster.jpg`, JPG, existing supplied portrait. Replace with a film-matched poster at the same path only after approval.
- Video: `/assets/video/femi-executive-hero.mp4`.
- Web behaviour: muted, loop, playsinline, preload none/metadata, `aria-hidden=true`, poster fallback, responsive `object-fit: cover`, reduced-motion/data-saving fallback. Never depend on video to communicate the headline.
- Mobile: test subject crop at 320, 375, 425 and 768 px. If the landscape master hides the face or text area, produce a deliberate mobile crop rather than zooming blindly.

## Acceptance checklist

- [ ] Film exactly 24 seconds and contains eight intentional shots.
- [ ] Opening and closing frames loop without a visible jump.
- [ ] Real person identity preserved in any identity-critical shot.
- [ ] No false client, employer, office, award, publication or event is implied.
- [ ] MP4/H.264, under 10 MB target, no sound, web-optimised.
- [ ] Poster and final film colour treatment match.
- [ ] Copy contrast is readable across every frame.
- [ ] Video is hidden/replaced by poster for reduced motion, data saver and load failure.
- [ ] Desktop/mobile crop and performance verified on the deployed domain.
