import { sectionsActions } from "./actions";

const initialSectionsState = {
  sections: [
    {
      type: "lists", id: "estrenos-imprescindibles-en-taquilla", numerical_id: 4665, category: null, short_name: "Imprescindibles", content_type: "Movie", is_b2b: false, wktv_code: null, only_coupon: false, kind: "regular", is_recommendation: false, name: "Estrenos imprescindibles en TAQUILLA", additional_images: {}, contents: {
        data: [{ type: "movies", id: "toy-story-4-extras", numerical_id: 109525, title: "Toy Story 4 (Extras)", year: 2019, duration: 100, label: "13,99 €", classification: { type: "classifications", id: "1", numerical_id: 1, name: "T", age: 0, adult: false, description: "Mostrar sólo contenidos autorizados para todos los públicos", default: false }, images: { artwork: "https://images-2.wuaki.tv/system/artworks/109525/master/toy-story-4-extras-1569289591.jpeg", snapshot: "https://images-1.wuaki.tv/system/shots/156058/original/toy-story-4-extras-1569290109.jpeg", ribbons: [{ type: "ribbons", id: "232", numerical_id: 232, name: "bonus-apiv3", color: "#b10a2b", text_color: "", position: "top-right", localized_name: "EXTRAS", image: null }] }, highlighted_score: { score: 7.6, amount_of_votes: 2537, formatted_amount_of_votes: "2,5K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "mib-international", numerical_id: 101104, title: "MIB: International", year: 2019, duration: 115, label: "3,99 €", classification: { type: "classifications", id: "3", numerical_id: 3, name: "7", age: 7, adult: false, description: "Mostrar sólo los contenidos autorizados para niños de hasta 7 años", default: false }, images: { artwork: "https://images-0.wuaki.tv/system/artworks/101104/master/mib-international-1568021575.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/155157/original/mib-international-1568021557.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 5.9, amount_of_votes: 1408, formatted_amount_of_votes: "1,4K" }, rating: { average: 3, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "godzilla-rey-de-los-monstruos", numerical_id: 101727, title: "Godzilla: Rey De Los Monstruos", year: 2019, duration: 131, label: "13,99 €", classification: { type: "classifications", id: "7", numerical_id: 7, name: "12", age: 12, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 12 años", default: false }, images: { artwork: "https://images-1.wuaki.tv/system/artworks/101727/master/godzilla-rey-de-los-monstruos-1564579273.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/151348/original/godzilla-rey-de-los-monstruos-1564579189.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 6.2, amount_of_votes: 1545, formatted_amount_of_votes: "1,5K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "x-men-fenix-oscura", numerical_id: 106303, title: "X-Men: Fénix Oscura", year: 2019, duration: 113, label: "4,99 €", classification: { type: "classifications", id: "7", numerical_id: 7, name: "12", age: 12, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 12 años", default: false }, images: { artwork: "https://images-1.wuaki.tv/system/artworks/106303/master/x-men-fenix-oscura-1568110156.jpeg", snapshot: "https://images-1.wuaki.tv/system/shots/155219/original/x-men-fenix-oscura-1568110316.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 6.1, amount_of_votes: 2075, formatted_amount_of_votes: "2,1K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, {
          type: "movies", id: "aladdin-2019", numerical_id: 101123, title: "Aladdin (2019)", year: 2019, duration: 123, label: "3,99 €", classification: { type: "classifications", id: "1", numerical_id: 1, name: "T", age: 0, adult: false, description: "Mostrar sólo contenidos autorizados para todos los públicos", default: false }, images: { artwork: "https://images-0.wuaki.tv/system/artworks/101123/master/aladdin-2019-1567606456.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/155016/original/aladdin-2019-1567606507.jpeg", ribbons: [] }, highlighted_score: { score: 7.1, amount_of_votes: 3629, formatted_amount_of_votes: "3,6K" }, rating: { average: 4, scale: 5 },
          labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] }
        }, { type: "movies", id: "john-wick-capitulo-3-parabellum", numerical_id: 106301, title: "John Wick: Capítulo 3 - Parabellum", year: 2019, duration: 131, label: "3,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-3.wuaki.tv/system/artworks/106301/master/john-wick-capitulo-3-parabellum-1568106431.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/155960/original/john-wick-capitulo-3-parabellum-1568973678.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 7.1, amount_of_votes: 2819, formatted_amount_of_votes: "2,8K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "vengadores-endgame", numerical_id: 101120, title: "Vengadores: Endgame", year: 2019, duration: 181, label: "4,99 €", classification: { type: "classifications", id: "3", numerical_id: 3, name: "7", age: 7, adult: false, description: "Mostrar sólo los contenidos autorizados para niños de hasta 7 años", default: false }, images: { artwork: "https://images-3.wuaki.tv/system/artworks/101120/master/vengadores-endgame-1565080619.jpeg", snapshot: "https://images-3.wuaki.tv/system/shots/151887/original/vengadores-endgame-1565080511.jpeg", ribbons: [] }, highlighted_score: { score: 8.3, amount_of_votes: 9735, formatted_amount_of_votes: "9,7K" }, rating: { average: 5, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "pokemon-detective-pikachu", numerical_id: 101478, title: "Pokémon: Detective Pikachu", year: 2019, duration: 104, label: "4,99 €", classification: { type: "classifications", id: "1", numerical_id: 1, name: "T", age: 0, adult: false, description: "Mostrar sólo contenidos autorizados para todos los públicos", default: false }, images: { artwork: "https://images-0.wuaki.tv/system/artworks/101478/master/pokemon-detective-pikachu-1564139688.jpeg", snapshot: "https://images-2.wuaki.tv/system/shots/150638/original/pokemon-detective-pikachu-1564139541.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 6.9, amount_of_votes: 2549, formatted_amount_of_votes: "2,5K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "timadoras-compulsivas", numerical_id: 105505, title: "Timadoras Compulsivas", year: 2019, duration: 93, label: "4,99 €", classification: { type: "classifications", id: "3", numerical_id: 3, name: "7", age: 7, adult: false, description: "Mostrar sólo los contenidos autorizados para niños de hasta 7 años", default: false }, images: { artwork: "https://images-3.wuaki.tv/system/artworks/105505/master/timadoras-compulsivas-1567069074.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/153499/original/the-hustle-1565345170.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 6.1, amount_of_votes: 669, formatted_amount_of_votes: "669" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, {
          type: "movies", id: "lo-dejo-cuando-quiera", numerical_id: 101107, title: "Lo dejo cuando quiera", year: 2019, duration: 94, label: "3,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-2.wuaki.tv/system/artworks/101107/master/lo-dejo-cuando-quiera-1566833020.jpeg", snapshot: "https://images-3.wuaki.tv/system/shots/154177/original/lo-dejo-cuando-quiera-1566834026.jpeg", ribbons: [] }, highlighted_score: { score: 5.7, amount_of_votes: 43, formatted_amount_of_votes: "43" }, rating: { average: 3, scale: 5 }, labels: {
            audio_qualities: [{
              type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0",
              image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
            }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }]
          }
        }, { type: "movies", id: "hellboy-2019", numerical_id: 101287, title: "Hellboy (2019)", year: 2019, duration: 114, label: "2,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-2.wuaki.tv/system/artworks/101287/master/hellboy-2019-1567507371.jpeg", snapshot: "https://images-1.wuaki.tv/system/shots/154861/original/hellboy-2019-1567507355.jpeg", ribbons: [] }, highlighted_score: { score: 5.1, amount_of_votes: 1251, formatted_amount_of_votes: "1,3K" }, rating: { average: 3, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "el-sotano-de-ma", numerical_id: 106302, title: "El sótano de Ma", year: 2019, duration: 99, label: "3,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-2.wuaki.tv/system/artworks/106302/master/el-sotano-de-ma-1568018718.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/155150/original/ma-1568018137.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 5.5, amount_of_votes: 545, formatted_amount_of_votes: "545" }, rating: { average: 3, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "rocketman-35529ccf-4210-4ace-9dfd-438fb752bfc2", numerical_id: 104447, title: "Rocketman", year: 2019, duration: 121, label: "3,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-0.wuaki.tv/system/artworks/104447/master/rocketman-1568102988.jpeg", snapshot: "https://images-1.wuaki.tv/system/shots/155194/original/rocketman-1568101720.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 7.4, amount_of_votes: 1227, formatted_amount_of_votes: "1,2K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "la-llorona", numerical_id: 95486, title: "La Llorona", year: 2019, duration: 93, label: "4,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-1.wuaki.tv/system/artworks/95486/master/la-llorona-1562068428.jpeg", snapshot: "https://images-1.wuaki.tv/system/shots/145980/original/la-llorona-1562067875.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 5.6, amount_of_votes: 766, formatted_amount_of_votes: "766" }, rating: { average: 3, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, {
          type: "movies", id: "la-espia-roja", numerical_id: 101286, title: "La espía roja", year: 2019, duration: 96, label: "2,99 €", classification: { type: "classifications", id: "3", numerical_id: 3, name: "7", age: 7, adult: false, description: "Mostrar sólo los contenidos autorizados para niños de hasta 7 años", default: false }, images: { artwork: "https://images-0.wuaki.tv/system/artworks/101286/master/la-espia-roja-1563465663.jpeg", snapshot: "https://images-1.wuaki.tv/system/shots/149262/original/la-espia-roja-1563465643.jpeg", ribbons: [] }, highlighted_score: { score: 6.5, amount_of_votes: 89, formatted_amount_of_votes: "89" }, rating: { average: 4, scale: 5 }, labels: {
            audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, {
              type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)",
              kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null
            }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }]
          }
        }, { type: "movies", id: "el-parque-magico", numerical_id: 101129, title: "El Parque Mágico", year: 2019, duration: 85, label: "3,99 €", classification: { type: "classifications", id: "1", numerical_id: 1, name: "T", age: 0, adult: false, description: "Mostrar sólo contenidos autorizados para todos los públicos", default: false }, images: { artwork: "https://images-3.wuaki.tv/system/artworks/101129/master/el-parque-magico-1562585925.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/146662/original/wonder-park-1562585663.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 6.3, amount_of_votes: 211, formatted_amount_of_votes: "211" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "shazam", numerical_id: 97610, title: "¡Shazam!", year: 2019, duration: 131, label: "4,99 €", classification: { type: "classifications", id: "3", numerical_id: 3, name: "7", age: 7, adult: false, description: "Mostrar sólo los contenidos autorizados para niños de hasta 7 años", default: false }, images: { artwork: "https://images-0.wuaki.tv/system/artworks/97610/master/shazam-1562061223.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/145974/original/shazam-1562060778.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 7.0, amount_of_votes: 3494, formatted_amount_of_votes: "3,5K" }, rating: { average: 4, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }, { type: "movies", id: "cementerio-de-animales-2019", numerical_id: 101132, title: "Cementerio de animales (2019)", year: 2019, duration: 100, label: "3,99 €", classification: { type: "classifications", id: "8", numerical_id: 8, name: "16", age: 16, adult: false, description: "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años", default: false }, images: { artwork: "https://images-2.wuaki.tv/system/artworks/101132/master/cementerio-de-animales-2019-1562579921.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/146587/original/cementerio-de-animales-2019-1562580657.jpeg", ribbons: [{ type: "ribbons", id: "6", numerical_id: 6, name: "UHD", color: "#ffcc00", text_color: "#000000", position: "top-left", localized_name: "UHD", image: "https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png" }] }, highlighted_score: { score: 5.8, amount_of_votes: 1370, formatted_amount_of_votes: "1,4K" }, rating: { average: 3, scale: 5 }, labels: { audio_qualities: [{ type: "audio_qualities", id: "2.0", numerical_id: 2, name: "2.0 (Stereo)", abbr: "2.0", image: "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png" }], hdr_types: [{ type: "hdr_types", id: "NONE", numerical_id: 1, name: "SDR", abbr: "NONE", image: null }], purchase_types: [{ type: "purchase_types", id: "1", numerical_id: 1, is_recurring: false, name: "Alquiler 48H", label: "ALQUILER 48H", kind: "rental", expires_after_in_seconds: 172800, available_time_in_seconds: 172800 }, { type: "purchase_types", id: "2", numerical_id: 2, is_recurring: false, name: "Venta (Digital Locker)", label: "VENTA (DIGITAL LOCKER)", kind: "purchase", expires_after_in_seconds: null, available_time_in_seconds: null }], video_qualities: [{ type: "video_qualities", id: "HD", numerical_id: 1, name: "HD", abbr: "HD", position: 1, image: "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png" }, { type: "video_qualities", id: "SD", numerical_id: 2, name: "SD", abbr: "SD", position: 0, image: "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png" }] } }], meta: { pagination: { page: 1, count: 21, per_page: 18, offset: 0, total_pages: 2 } }
      }
    }
  ]
};

export const sections = (state = initialSectionsState, action) => {
  switch (action.type) {
    case sectionsActions.GET:
      return {
        ...state,
      };
    case sectionsActions.SET: {
      return {
        ...initialSectionsState,
        sections: [...action.payload]
      };
    }
    default: {
      return {
        ...initialSectionsState
      };
    }
  }
}