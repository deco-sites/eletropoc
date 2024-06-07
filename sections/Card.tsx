import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  title?: string;
  desktopColumns?: 2 | 3 | 4;
  items?: Card[];
}

export interface Card {
  image?: ImageWidget;
  title?: string;
  /**
   * @format textarea
   */
  text?: string;
}

function Card({image, title, text}: Card) {
  return (
    <div class="relative group w-full rounded-lg overflow-hidden">
      <a href="/">
        <img class="w-full" src={ image } />

        <div class="absolute w-full transition-all duration-500 left-0 bottom-0 p-4 xl:p-8 bg-[#011e41] bg-opacity-60 hover:bg-opacity-90">
          <h3 class="line-clamp-3 text-sm xl:text-lg text-white mb-2">
            { text }
          </h3>
          <span class="relative flex items-center transition-all duration-500 overflow-hidden h-0 group-hover:h-9 text-xs xl:text-sm font-bold text-white">
            <span class="transition-all duration-500 delay-200 opacity-0 group-hover:opacity-100 hover:underline">Visualizar</span>
          </span>
        </div>
      </a>
    </div>
  )
}

function CardContainer({title, desktopColumns, items}: Props) {

  const cols = desktopColumns ? `lg:grid-cols-${desktopColumns}` : `lg:grid-cols-2`;
  return (
    <div>
      <div class="w-full py-20">
        <h2 class="block text-4xl font-normal text-primary text-center mb-8">
          {title}
        </h2>
        <div class={`relative grid grid-cols-1 sm:grid-cols-2 ${cols} container mx-auto gap-4 px-4 lg:px-0`}>
          {
            items?.map((item) => (
              <Card
                image={ item.image }
                title={ item.title }
                text={ item.text }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardContainer;