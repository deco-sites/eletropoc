// import Slider from "../components/ui/Slider.tsx";

interface Props {
  /**
   * @title Cor de fundo
   * @format color-input
   */
  background?: string;
  /** @title Largura */
  width?: "w-full" | "max-w-screen-xl";
  /** @title Texto do Título */
  title?: string;
  /** @title Texto do Subtítulo */
  subtitle?: string;
  image?: {
    /** @title Texto alternativo da imagem(alt). */
    alt?: string;
    link?: string;
    /** @title Banner mobile */
    mobile?: ImageWidget;
    /** @title Banner desktop */
    desktop?: ImageWidget;
  }[];
}

function Banner({
  width = "max-w-screen-xl",
  title = "Bem-vindo à nossa loja",
  subtitle = "Confira nossas ofertas especiais",
  image = [
    {
      alt: "Electrolux",
      link: "/",
      mobile: "https://electrolux.vtexassets.com/assets/vtex.file-manager-graphql/images/f33e3f61-c7d3-4b5d-9e06-f27cf97c26a6___9b256fd19c5131e117e07216b99f1c1c.gif",
      desktop: "https://electrolux.vtexassets.com/assets/vtex.file-manager-graphql/images/3c9e135c-1a8f-4cfb-8fb0-0785707bd3a0___566afecc9a483b8599a35d9b89731afa.gif",
    },
    {
      alt: "Electrolux",
      link: "/",
      mobile: "https://electrolux.vtexassets.com/assets/vtex.file-manager-graphql/images/f33e3f61-c7d3-4b5d-9e06-f27cf97c26a6___9b256fd19c5131e117e07216b99f1c1c.gif",
      desktop: "https://electrolux.vtexassets.com/assets/vtex.file-manager-graphql/images/3c9e135c-1a8f-4cfb-8fb0-0785707bd3a0___566afecc9a483b8599a35d9b89731afa.gif",
    },
  ],
}: Props) {
  return (
    <div class="relative">
      <div class={`${width} mx-auto`}>
        <ul>
          {image.map((item, index) => (
            <li>
              <a
                href={item.link}
                aria-label={item.alt}
                class="text-white font-medium text-sm"
              >
                <picture>
                  <source
                    srcset={item.desktop}
                    media="(min-width: 1024px)"
                  />
                  <img
                    class="w-full"
                    src={item.mobile}
                    alt={item.alt}
                    loading="lazy"
                  />
                </picture>
              </a>
            </li>
          ))}
        </ul>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 class="text-4xl font-bold text-white mb-4">{title}</h2>
          <p class="text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;