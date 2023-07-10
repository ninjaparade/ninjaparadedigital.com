<template>
  <!-- Header 1 -->
  <header class="bg-secondary overflow-hidden">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Ninja Parade</span>
        <svg class="h-8 w-auto" width="295" height="48" viewBox="0 0 295 48" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M19.2065 36.1836C18.7673 36.2231 18.4475 36.0637 18.2082 35.7045L2.51566 13.6626V34.9455C2.51566 35.624 1.91609 36.1836 1.23759 36.1836C0.909809 36.1819 0.595949 36.0509 0.364215 35.819C0.13248 35.5872 0.00159506 35.2733 0 34.9455L0 10.1886C0 9.55006 0.519121 8.91103 1.27807 8.91103C1.71674 8.91103 2.07649 9.15086 2.27584 9.43015C2.27584 9.43015 15.0535 27.7183 17.9284 31.4316V10.1891C17.9284 9.5106 18.4875 8.91103 19.1665 8.91103C19.8455 8.91103 20.4441 9.5106 20.4441 10.1891V34.946C20.4441 35.624 19.886 36.1431 19.2065 36.1836ZM31.5521 36.1836C30.8336 36.1836 30.235 35.5846 30.235 34.8656V10.2291C30.235 9.5106 30.8336 8.91103 31.5521 8.91103C32.271 8.91103 32.8301 9.5106 32.8301 10.2291V34.8661C32.8301 35.5851 32.271 36.1836 31.5521 36.1836ZM61.7633 36.1836C61.3241 36.2231 61.0043 36.0637 60.765 35.7045L45.0725 13.6626V34.9455C45.0725 35.624 44.4734 36.1836 43.7949 36.1836C43.467 36.182 43.1531 36.0511 42.9212 35.8192C42.6894 35.5874 42.5584 35.2734 42.5568 34.9455V10.1886C42.5568 9.55006 43.0759 8.91103 43.8344 8.91103C44.2736 8.91103 44.6328 9.15086 44.8327 9.43015C44.8327 9.43015 57.6103 27.7183 60.4852 31.4316V10.1891C60.4852 9.5106 61.0443 8.91103 61.7233 8.91103C62.4018 8.91103 63.0009 9.5106 63.0009 10.1891V34.946C63.0009 35.624 62.4423 36.1431 61.7633 36.1836ZM78.4652 36.383C73.7942 36.383 70.1198 33.4681 69.2815 29.0363C69.2415 28.8759 69.202 28.7166 69.202 28.5567C69.162 27.8382 69.6412 27.2791 70.3597 27.2391C71.0387 27.1992 71.5578 27.5984 71.6777 28.2374C72.2768 31.7114 74.9513 34.0272 78.4658 34.0272C82.6182 34.0272 85.1733 31.2317 85.1733 25.9616V10.2291C85.1733 9.5106 85.7734 8.91103 86.4919 8.91103C87.2104 8.91103 87.7695 9.5106 87.7695 10.2291V25.9211C87.7695 31.7509 84.7741 36.383 78.4652 36.383ZM152.842 21.9685H142.86V11.6265H152.842C155.956 11.6265 157.833 14.0618 157.833 16.8173C157.833 19.5722 155.957 21.9685 152.842 21.9685ZM152.562 9.27077H141.542C141.374 9.26853 141.207 9.30002 141.051 9.3634C140.895 9.42678 140.753 9.52075 140.634 9.63978C140.515 9.75881 140.421 9.90048 140.357 10.0564C140.294 10.2124 140.262 10.3795 140.264 10.5478V34.905C140.262 35.0735 140.294 35.2407 140.357 35.3968C140.42 35.5529 140.514 35.6947 140.633 35.8139C140.753 35.9331 140.894 36.0272 141.05 36.0907C141.206 36.1542 141.374 36.1858 141.542 36.1836C142.261 36.1836 142.86 35.624 142.86 34.9056V24.3637H152.602C157.674 24.3637 160.469 20.8503 160.469 16.8173C160.469 12.7847 157.634 9.27077 152.562 9.27077ZM195.992 21.7287V11.6265H206.335C209.249 11.6265 211.325 13.7425 211.325 16.6973C211.325 19.6522 209.249 21.7287 206.335 21.7287H195.992ZM208.411 23.6058C211.805 22.9663 213.961 20.1318 213.961 16.6579C213.961 12.0657 210.607 9.27077 206.055 9.27077H194.635C194.466 9.2686 194.299 9.30014 194.143 9.36354C193.987 9.42694 193.846 9.52092 193.727 9.63994C193.607 9.75895 193.513 9.9006 193.45 10.0565C193.387 10.2124 193.355 10.3795 193.357 10.5478V34.905C193.355 35.0735 193.386 35.2407 193.45 35.3967C193.513 35.5528 193.607 35.6946 193.726 35.8138C193.845 35.9329 193.987 36.0271 194.143 36.0906C194.299 36.1541 194.466 36.1857 194.635 36.1836C195.354 36.1836 195.992 35.624 195.992 34.9056V23.9645H205.775C205.775 23.9645 205.775 24.005 211.366 35.4651C211.605 35.9043 212.044 36.1836 212.524 36.1836C212.683 36.1836 212.883 36.1431 213.042 36.0637C213.481 35.8638 213.722 35.3852 213.722 34.9455C213.722 34.7462 213.681 34.5863 213.602 34.3864C208.57 24.0045 208.411 23.6058 208.411 23.6058ZM256.77 33.5081H251.101V11.6271H256.771C263.559 11.6271 267.273 16.6584 267.273 22.5676C267.273 28.4772 263.559 33.5086 256.771 33.5086L256.77 33.5081ZM257.01 9.27077H249.783C249.063 9.27077 248.465 9.82936 248.465 10.5478V34.5463C248.468 34.8948 248.608 35.2282 248.855 35.4746C249.101 35.721 249.434 35.8608 249.783 35.8639H257.01C264.996 35.8639 269.907 29.7148 269.907 22.5671C269.907 15.4198 264.996 9.27077 257.01 9.27077ZM293.356 35.8639H277.423C276.705 35.8639 276.106 35.2648 276.106 34.5463V10.5483C276.106 9.82936 276.705 9.27077 277.423 9.27077H292.757C293.436 9.27077 293.995 9.78989 293.995 10.4684C293.995 11.1474 293.436 11.666 292.757 11.666H278.702V20.8103H286.648C287.326 20.8103 287.846 21.3295 287.846 22.0085C287.846 22.6875 287.326 23.2061 286.648 23.2061H278.701V33.4681H293.355C294.034 33.4681 294.553 33.9872 294.553 34.6662C294.553 35.3447 294.034 35.8639 293.355 35.8639M187.321 34.4264L176.061 9.66947C175.942 9.43015 175.541 8.91052 174.943 8.91052C174.344 8.91052 173.905 9.39068 173.785 9.66947L162.525 34.4264C162.445 34.5858 162.445 34.7861 162.445 34.9455C162.445 35.4247 162.724 35.8638 163.163 36.0637C163.323 36.1431 163.523 36.1836 163.683 36.1836C164.162 36.1836 164.601 35.8638 164.801 35.4247L168.115 28.0775H168.109L169.153 25.8012L174.943 13.024L180.693 25.8012L181.731 28.0775L185.085 35.4646C185.285 35.9438 185.724 36.1831 186.204 36.1831C186.363 36.1831 186.522 36.1431 186.682 36.0637C186.897 35.966 187.079 35.8086 187.206 35.6103C187.334 35.412 187.401 35.1813 187.401 34.9455C187.401 34.7861 187.401 34.5863 187.321 34.4264ZM243.801 34.4264L232.541 9.66947C232.422 9.43015 232.022 8.91052 231.423 8.91052C230.824 8.91052 230.385 9.39068 230.265 9.66947L219.004 34.4264C218.925 34.5858 218.925 34.7861 218.925 34.9455C218.925 35.4247 219.204 35.8638 219.644 36.0637C219.803 36.1431 220.003 36.1836 220.163 36.1836C220.642 36.1836 221.081 35.8638 221.281 35.4247L224.595 28.0775H224.589L225.633 25.8012L231.423 13.024L237.173 25.8012L238.211 28.0775L241.565 35.4646C241.765 35.9438 242.204 36.1831 242.683 36.1831C242.85 36.1814 243.014 36.1405 243.162 36.0637C243.376 35.9661 243.558 35.8087 243.686 35.6104C243.814 35.4121 243.881 35.1813 243.881 34.9455C243.881 34.7861 243.881 34.5863 243.801 34.4264ZM117.893 34.4264L106.632 9.66947C106.513 9.43015 106.113 8.91052 105.514 8.91052C104.916 8.91052 104.476 9.39068 104.356 9.66947L93.0963 34.4264C93.0168 34.5858 93.0168 34.7861 93.0168 34.9455C93.0168 35.4247 93.2961 35.8638 93.7353 36.0637C93.8952 36.1431 94.0945 36.1836 94.2539 36.1836C94.7336 36.1836 95.1728 35.8638 95.3721 35.4247L98.6867 28.0775H98.6806L99.7244 25.8012L105.515 13.024L111.265 25.8012L112.303 28.0775L115.657 35.4646C115.857 35.9438 116.296 36.1831 116.774 36.1831C116.934 36.1831 117.094 36.1431 117.254 36.0637C117.468 35.9658 117.65 35.8084 117.777 35.6102C117.905 35.4119 117.973 35.1812 117.973 34.9455C117.973 34.7861 117.973 34.5863 117.893 34.4264Z"
              fill="white"/>
          <path
              d="M137.557 1.85032L122.869 47.0751C122.695 47.6524 122.231 48 121.654 48C121.48 48 121.307 48 121.132 47.9418C120.556 47.7683 120.15 47.1899 120.15 46.6116C120.15 46.4963 120.15 46.3804 120.208 46.2074L134.897 0.983092C135.07 0.404773 135.707 0 136.285 0C136.401 0 136.574 1.86265e-08 136.69 0.0571742C137.268 0.231227 137.615 0.809546 137.615 1.38736C137.615 1.56141 137.615 1.67627 137.557 1.85032Z"
              fill="#A81C27"/>
        </svg>
      </a>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           class="text-sm font-semibold leading-6 text-white hover:text-primary-800">{{ item.name }}</a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-secondary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Ninja Parade</span>
            <svg class="h-8 w-auto" width="295" height="48" viewBox="0 0 295 48" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M19.2065 36.1836C18.7673 36.2231 18.4475 36.0637 18.2082 35.7045L2.51566 13.6626V34.9455C2.51566 35.624 1.91609 36.1836 1.23759 36.1836C0.909809 36.1819 0.595949 36.0509 0.364215 35.819C0.13248 35.5872 0.00159506 35.2733 0 34.9455L0 10.1886C0 9.55006 0.519121 8.91103 1.27807 8.91103C1.71674 8.91103 2.07649 9.15086 2.27584 9.43015C2.27584 9.43015 15.0535 27.7183 17.9284 31.4316V10.1891C17.9284 9.5106 18.4875 8.91103 19.1665 8.91103C19.8455 8.91103 20.4441 9.5106 20.4441 10.1891V34.946C20.4441 35.624 19.886 36.1431 19.2065 36.1836ZM31.5521 36.1836C30.8336 36.1836 30.235 35.5846 30.235 34.8656V10.2291C30.235 9.5106 30.8336 8.91103 31.5521 8.91103C32.271 8.91103 32.8301 9.5106 32.8301 10.2291V34.8661C32.8301 35.5851 32.271 36.1836 31.5521 36.1836ZM61.7633 36.1836C61.3241 36.2231 61.0043 36.0637 60.765 35.7045L45.0725 13.6626V34.9455C45.0725 35.624 44.4734 36.1836 43.7949 36.1836C43.467 36.182 43.1531 36.0511 42.9212 35.8192C42.6894 35.5874 42.5584 35.2734 42.5568 34.9455V10.1886C42.5568 9.55006 43.0759 8.91103 43.8344 8.91103C44.2736 8.91103 44.6328 9.15086 44.8327 9.43015C44.8327 9.43015 57.6103 27.7183 60.4852 31.4316V10.1891C60.4852 9.5106 61.0443 8.91103 61.7233 8.91103C62.4018 8.91103 63.0009 9.5106 63.0009 10.1891V34.946C63.0009 35.624 62.4423 36.1431 61.7633 36.1836ZM78.4652 36.383C73.7942 36.383 70.1198 33.4681 69.2815 29.0363C69.2415 28.8759 69.202 28.7166 69.202 28.5567C69.162 27.8382 69.6412 27.2791 70.3597 27.2391C71.0387 27.1992 71.5578 27.5984 71.6777 28.2374C72.2768 31.7114 74.9513 34.0272 78.4658 34.0272C82.6182 34.0272 85.1733 31.2317 85.1733 25.9616V10.2291C85.1733 9.5106 85.7734 8.91103 86.4919 8.91103C87.2104 8.91103 87.7695 9.5106 87.7695 10.2291V25.9211C87.7695 31.7509 84.7741 36.383 78.4652 36.383ZM152.842 21.9685H142.86V11.6265H152.842C155.956 11.6265 157.833 14.0618 157.833 16.8173C157.833 19.5722 155.957 21.9685 152.842 21.9685ZM152.562 9.27077H141.542C141.374 9.26853 141.207 9.30002 141.051 9.3634C140.895 9.42678 140.753 9.52075 140.634 9.63978C140.515 9.75881 140.421 9.90048 140.357 10.0564C140.294 10.2124 140.262 10.3795 140.264 10.5478V34.905C140.262 35.0735 140.294 35.2407 140.357 35.3968C140.42 35.5529 140.514 35.6947 140.633 35.8139C140.753 35.9331 140.894 36.0272 141.05 36.0907C141.206 36.1542 141.374 36.1858 141.542 36.1836C142.261 36.1836 142.86 35.624 142.86 34.9056V24.3637H152.602C157.674 24.3637 160.469 20.8503 160.469 16.8173C160.469 12.7847 157.634 9.27077 152.562 9.27077ZM195.992 21.7287V11.6265H206.335C209.249 11.6265 211.325 13.7425 211.325 16.6973C211.325 19.6522 209.249 21.7287 206.335 21.7287H195.992ZM208.411 23.6058C211.805 22.9663 213.961 20.1318 213.961 16.6579C213.961 12.0657 210.607 9.27077 206.055 9.27077H194.635C194.466 9.2686 194.299 9.30014 194.143 9.36354C193.987 9.42694 193.846 9.52092 193.727 9.63994C193.607 9.75895 193.513 9.9006 193.45 10.0565C193.387 10.2124 193.355 10.3795 193.357 10.5478V34.905C193.355 35.0735 193.386 35.2407 193.45 35.3967C193.513 35.5528 193.607 35.6946 193.726 35.8138C193.845 35.9329 193.987 36.0271 194.143 36.0906C194.299 36.1541 194.466 36.1857 194.635 36.1836C195.354 36.1836 195.992 35.624 195.992 34.9056V23.9645H205.775C205.775 23.9645 205.775 24.005 211.366 35.4651C211.605 35.9043 212.044 36.1836 212.524 36.1836C212.683 36.1836 212.883 36.1431 213.042 36.0637C213.481 35.8638 213.722 35.3852 213.722 34.9455C213.722 34.7462 213.681 34.5863 213.602 34.3864C208.57 24.0045 208.411 23.6058 208.411 23.6058ZM256.77 33.5081H251.101V11.6271H256.771C263.559 11.6271 267.273 16.6584 267.273 22.5676C267.273 28.4772 263.559 33.5086 256.771 33.5086L256.77 33.5081ZM257.01 9.27077H249.783C249.063 9.27077 248.465 9.82936 248.465 10.5478V34.5463C248.468 34.8948 248.608 35.2282 248.855 35.4746C249.101 35.721 249.434 35.8608 249.783 35.8639H257.01C264.996 35.8639 269.907 29.7148 269.907 22.5671C269.907 15.4198 264.996 9.27077 257.01 9.27077ZM293.356 35.8639H277.423C276.705 35.8639 276.106 35.2648 276.106 34.5463V10.5483C276.106 9.82936 276.705 9.27077 277.423 9.27077H292.757C293.436 9.27077 293.995 9.78989 293.995 10.4684C293.995 11.1474 293.436 11.666 292.757 11.666H278.702V20.8103H286.648C287.326 20.8103 287.846 21.3295 287.846 22.0085C287.846 22.6875 287.326 23.2061 286.648 23.2061H278.701V33.4681H293.355C294.034 33.4681 294.553 33.9872 294.553 34.6662C294.553 35.3447 294.034 35.8639 293.355 35.8639M187.321 34.4264L176.061 9.66947C175.942 9.43015 175.541 8.91052 174.943 8.91052C174.344 8.91052 173.905 9.39068 173.785 9.66947L162.525 34.4264C162.445 34.5858 162.445 34.7861 162.445 34.9455C162.445 35.4247 162.724 35.8638 163.163 36.0637C163.323 36.1431 163.523 36.1836 163.683 36.1836C164.162 36.1836 164.601 35.8638 164.801 35.4247L168.115 28.0775H168.109L169.153 25.8012L174.943 13.024L180.693 25.8012L181.731 28.0775L185.085 35.4646C185.285 35.9438 185.724 36.1831 186.204 36.1831C186.363 36.1831 186.522 36.1431 186.682 36.0637C186.897 35.966 187.079 35.8086 187.206 35.6103C187.334 35.412 187.401 35.1813 187.401 34.9455C187.401 34.7861 187.401 34.5863 187.321 34.4264ZM243.801 34.4264L232.541 9.66947C232.422 9.43015 232.022 8.91052 231.423 8.91052C230.824 8.91052 230.385 9.39068 230.265 9.66947L219.004 34.4264C218.925 34.5858 218.925 34.7861 218.925 34.9455C218.925 35.4247 219.204 35.8638 219.644 36.0637C219.803 36.1431 220.003 36.1836 220.163 36.1836C220.642 36.1836 221.081 35.8638 221.281 35.4247L224.595 28.0775H224.589L225.633 25.8012L231.423 13.024L237.173 25.8012L238.211 28.0775L241.565 35.4646C241.765 35.9438 242.204 36.1831 242.683 36.1831C242.85 36.1814 243.014 36.1405 243.162 36.0637C243.376 35.9661 243.558 35.8087 243.686 35.6104C243.814 35.4121 243.881 35.1813 243.881 34.9455C243.881 34.7861 243.881 34.5863 243.801 34.4264ZM117.893 34.4264L106.632 9.66947C106.513 9.43015 106.113 8.91052 105.514 8.91052C104.916 8.91052 104.476 9.39068 104.356 9.66947L93.0963 34.4264C93.0168 34.5858 93.0168 34.7861 93.0168 34.9455C93.0168 35.4247 93.2961 35.8638 93.7353 36.0637C93.8952 36.1431 94.0945 36.1836 94.2539 36.1836C94.7336 36.1836 95.1728 35.8638 95.3721 35.4247L98.6867 28.0775H98.6806L99.7244 25.8012L105.515 13.024L111.265 25.8012L112.303 28.0775L115.657 35.4646C115.857 35.9438 116.296 36.1831 116.774 36.1831C116.934 36.1831 117.094 36.1431 117.254 36.0637C117.468 35.9658 117.65 35.8084 117.777 35.6102C117.905 35.4119 117.973 35.1812 117.973 34.9455C117.973 34.7861 117.973 34.5863 117.893 34.4264Z"
                  fill="white"/>
              <path
                  d="M137.557 1.85032L122.869 47.0751C122.695 47.6524 122.231 48 121.654 48C121.48 48 121.307 48 121.132 47.9418C120.556 47.7683 120.15 47.1899 120.15 46.6116C120.15 46.4963 120.15 46.3804 120.208 46.2074L134.897 0.983092C135.07 0.404773 135.707 0 136.285 0C136.401 0 136.574 1.86265e-08 136.69 0.0571742C137.268 0.231227 137.615 0.809546 137.615 1.38736C137.615 1.56141 137.615 1.67627 137.557 1.85032Z"
                  fill="#A81C27"/>
            </svg>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-primary-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-800">{{
                  item.name
                }}</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <!-- Section 1 -->
  <div class="bg-secondary pt-32 pb-40 sm:pt-52 sm:pb-64 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-5xl font-medium tracking-tight text-white sm:text-8xl">
        From Concept to <span class="text-primary-800">Reality</span>
      </h2>
      <p class="mt-6 text-lg sm:text-2xl max-w-2xl leading-8 text-gray-200 mb-10">
        Ninjaparade Crafts Stunning Apps That Wow Users with Innovative Features and Intuitive Designs, Delivering
        Unmatched User Experiences
      </p>
      <button type="button"
              class="rounded-full bg-primary-800 px-7 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800">
        Start project
      </button>
    </div>
  </div>

  <!-- Section 2 -->
  <div class="bg-white py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl font-medium tracking-tight sm:text-5xl mb-20">
        What can we do for you?
      </h2>
      <div class="flex gap-12">
        <div
            class="relative bg-secondary flex p-10 flex-col justify-between items-start flex-1 self-stretch rounded-xl h-[355px] overflow-hidden">
          <h4 class="text-white text-lg sm:text-4xl">Laravel</h4>
          <img class="w-[126px] absolute -right-4 -top-4" src="../assets/laravel-logo.png" alt="Laravel Logo"/>
          <div>
            <p class="mb-6 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply.
            </p>
            <div class="text-white text-xl font-medium">
              <div>Explore more</div>
            </div>
          </div>
        </div>

        <div
            class="relative bg-secondary flex p-10 flex-col justify-between items-start flex-1 self-stretch rounded-xl h-[355px] overflow-hidden">
          <h4 class="text-white text-lg sm:text-4xl">Vue & React</h4>
          <img class="w-[74px] absolute -right-2 -top-2" src="../assets/react-logo.png" alt="Laravel Logo"/>
          <img class="w-[62px] absolute -right-0 top-16" src="../assets/vue-logo.png" alt="Laravel Logo"/>
          <div>
            <p class="mb-6 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply.
            </p>
            <div class="text-white text-xl font-medium">
              <div>Explore more</div>
            </div>
          </div>
        </div>
        <div
            class="relative bg-secondary flex p-10 flex-col justify-between items-start flex-1 self-stretch rounded-xl h-[355px] overflow-hidden">
          <h4 class="text-white text-lg sm:text-4xl">UI & UX Design</h4>
          <img class="w-[88px] absolute -right-6 top-2" src="../assets/figma-logo.png" alt="Laravel Logo"/>
          <div>
            <p class="mb-6 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply.
            </p>
            <div class="text-white text-xl font-medium">
              <div>Explore more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 3 -->
  <div class="relative py-24 sm:py-32 ring ring-black inset-x mb-32 overflow-hidden">
    <div class="absolute -inset-y-px left-1/2 z-10 w-full skew-x-[-30deg] bg-white" aria-hidden="true"></div>
    <div class="absolute -inset-y-px left-1/2 z-20 w-[35px] -ml-[35px] skew-x-[-30deg] bg-primary-800"
         aria-hidden="true"></div>
    <div class="absolute -inset-y-px right-1/2 z-10 w-full skew-x-[-30deg] bg-secondary" aria-hidden="true"></div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-30">
      <div class="grid grid-cols-2 text-2xl">
        <div class="text-white">
          <div>We help businesses bring ideas to life in</div>
          <div>implementing the technology tools</div>
        </div>
        <div class="ml-16">
          <div class="ml-10">the digital world, by designing and</div>
          <div class="text-primary-800">that they need to win.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 4 -->
  <div class="overflow-hidden bg-white py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h4 class="text-lg tracking-tight sm:text-xl mb-10">
        Most recent work
      </h4>
      <div
          class="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-12">
        <div class="col-span-5 lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-3xl font-semibold leading-7 text-primary-800">Deco</h2>
            <p class="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">Find the tents to save your
              Windshield</p>
            <p class="mt-6 text-lg leading-8 text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <div class="text-primary-800 font-medium text-xl">View case study</div>
          </div>
        </div>
        <img src="../assets/deco1.png"
             alt="Product screenshot"
             class="col-span-7 rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"
        />
      </div>
      <div
          class="mx-auto grid items-center  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-12 my-36">
        <img src="../assets/liveit1.png"
             alt="Product screenshot"
             class="col-span-7 rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"
        />
        <div class="col-span-5 lg:pl-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-3xl font-semibold leading-7 text-primary-800">Live It</h2>
            <p class="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">A Story for Every Kid</p>
            <p class="mt-6 text-lg leading-8 text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <div class="text-primary-800 font-medium text-xl">View case study</div>
          </div>
        </div>
      </div>
      <div
          class="mx-auto grid items-center  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-12 my-36">
        <div class="col-span-5 lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-3xl font-semibold leading-7 text-primary-800">Deco APP</h2>
            <p class="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">Find the tents to save your
              Windshield</p>
            <p class="mt-6 text-lg leading-8 text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <div class="text-primary-800 font-medium text-xl">View case study</div>
          </div>
        </div>
        <img src="../assets/deco2.png"
             alt="Product screenshot"
             class="col-span-7 rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  </div>

  <!-- Section 5 -->
  <div class="bg-secondary py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl font-medium text-white tracking-tight sm:text-5xl mb-20">
        Let's kick off your project in 3 easy steps
      </h2>
      <div
          class="rounded-xl border border-gray-100/5 bg-gradient-to-r from-primary-900/10 to-black/10 backdrop-blur-md flex gap-12">
        <div
            class="relative flex p-10 flex-col justify-between items-start flex-1 self-stretch rounded-xl overflow-hidden">
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.660156" width="48" height="48" rx="12" fill="white" fill-opacity="0.08"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15 22.0602V29.9349C15 31.7929 15 32.7219 15.3646 33.1442C15.6809 33.5105 16.1545 33.7017 16.6364 33.6577C17.1921 33.607 17.8371 32.9384 19.1272 31.6013L20.0563 30.6383C20.4043 30.2776 20.5783 30.0973 20.7832 29.9681C20.9648 29.8537 21.1637 29.7692 21.3722 29.718C21.6073 29.6602 21.8579 29.6602 22.3592 29.6602H26.6C28.8402 29.6602 29.9603 29.6602 30.816 29.2242C31.5686 28.8407 32.1805 28.2288 32.564 27.4762C33 26.6205 33 25.5004 33 23.2602V22.0602C33 19.8199 33 18.6998 32.564 17.8442C32.1805 17.0915 31.5686 16.4796 30.816 16.0961C29.9603 15.6602 28.8402 15.6602 26.6 15.6602H21.4C19.1598 15.6602 18.0397 15.6602 17.184 16.0961C16.4314 16.4796 15.8195 17.0915 15.436 17.8442C15 18.6998 15 19.8199 15 22.0602ZM20 23.6602C20.5523 23.6602 21 23.2125 21 22.6602C21 22.1079 20.5523 21.6602 20 21.6602C19.4477 21.6602 19 22.1079 19 22.6602C19 23.2125 19.4477 23.6602 20 23.6602ZM25 22.6602C25 23.2125 24.5523 23.6602 24 23.6602C23.4477 23.6602 23 23.2125 23 22.6602C23 22.1079 23.4477 21.6602 24 21.6602C24.5523 21.6602 25 22.1079 25 22.6602ZM28 23.6602C28.5523 23.6602 29 23.2125 29 22.6602C29 22.1079 28.5523 21.6602 28 21.6602C27.4477 21.6602 27 22.1079 27 22.6602C27 23.2125 27.4477 23.6602 28 23.6602Z"
                  fill="white"/>
          </svg>
          <h4 class="text-white text-xl sm:text-2xl mb-6 mt-12">Step 1</h4>
          <p class="mb-6 text-gray-200">
            Write us to know the scope of the project
          </p>
        </div>

        <div
            class="relative flex p-10 flex-col justify-between items-start flex-1 self-stretch rounded-xl overflow-hidden">
          <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.666626" y="0.660156" width="48" height="48" rx="12" fill="white" fill-opacity="0.08"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M30.6666 33.6602H18.6666C17.0098 33.6602 15.6666 32.3171 15.6666 30.6602V18.6602C15.6666 17.0033 17.0098 15.6602 18.6666 15.6602H30.6666C32.3235 15.6602 33.6666 17.0033 33.6666 18.6602V30.6602C33.6666 32.3171 32.3235 33.6602 30.6666 33.6602ZM29.6666 21.0744L25.0808 25.6602H26.6666C27.2189 25.6602 27.6666 26.1079 27.6666 26.6602C27.6666 27.2125 27.2189 27.6602 26.6666 27.6602H22.6666C22.1143 27.6602 21.6666 27.2125 21.6666 26.6602V22.6602C21.6666 22.1079 22.1143 21.6602 22.6666 21.6602C23.2189 21.6602 23.6666 22.1079 23.6666 22.6602V24.246L28.2524 19.6602H26.6666C26.1143 19.6602 25.6666 19.2124 25.6666 18.6602C25.6666 18.1079 26.1143 17.6602 26.6666 17.6602H30.6666C31.2189 17.6602 31.6666 18.1079 31.6666 18.6602V22.6602C31.6666 23.2125 31.2189 23.6602 30.6666 23.6602C30.1143 23.6602 29.6666 23.2125 29.6666 22.6602V21.0744Z"
                  fill="white"/>
          </svg>
          <h4 class="text-white text-xl sm:text-2xl mb-6 mt-12">Step 2</h4>
          <p class="mb-6 text-gray-200">
            Expand ideas and try to fit with our tech stack
          </p>
        </div>

        <div
            class="relative flex p-10 flex-col justify-between items-start flex-1 self-stretch rounded-xl overflow-hidden">
          <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.333313" y="0.660156" width="48" height="48" rx="12" fill="white" fill-opacity="0.08"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M31.3333 30.1602C31.3333 29.3318 30.6617 28.6602 29.8333 28.6602H20.3333C17.5719 28.6602 15.3333 26.4216 15.3333 23.6602C15.3333 20.8987 17.5719 18.6602 20.3333 18.6602H23.3333V20.6602H20.3333C18.6765 20.6602 17.3333 22.0033 17.3333 23.6602C17.3333 25.3171 18.6765 26.6602 20.3333 26.6602H29.8333C31.7663 26.6602 33.3333 28.2272 33.3333 30.1602C33.3333 32.0932 31.7663 33.6602 29.8333 33.6602H16.3333C15.781 33.6602 15.3333 33.2125 15.3333 32.6602C15.3333 32.1079 15.781 31.6602 16.3333 31.6602H29.8333C30.6617 31.6602 31.3333 30.9886 31.3333 30.1602Z"
                  fill="white"/>
            <path
                d="M32.3333 16.6602H28.3333V18.6602H32.3333C32.8856 18.6602 33.3333 18.2124 33.3333 17.6602C33.3333 17.1079 32.8856 16.6602 32.3333 16.6602Z"
                fill="white"/>
            <path
                d="M32.3333 20.6602H28.3333V22.6602H32.3333C32.8856 22.6602 33.3333 22.2124 33.3333 21.6602C33.3333 21.1079 32.8856 20.6602 32.3333 20.6602Z"
                fill="white"/>
            <path
                d="M21.3333 19.6602C21.3333 17.451 23.1242 15.6602 25.3333 15.6602H29.3333C29.8856 15.6602 30.3333 16.1079 30.3333 16.6602V22.6602C30.3333 23.2125 29.8856 23.6602 29.3333 23.6602H25.3333C23.1242 23.6602 21.3333 21.8693 21.3333 19.6602Z"
                fill="white"/>
          </svg>
          <h4 class="text-white text-xl sm:text-2xl mb-6 mt-12">Step 3</h4>
          <p class="mb-6 text-gray-200">
            Sign the contract and let’s start to rock and roll
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 6 -->
  <div class="bg-white py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl font-medium text-primary-800 tracking-tight sm:text-5xl mb-2">
        No need to wonder
      </h2>
      <h2 class="text-xl font-medium tracking-tight  sm:text-3xl mb-20">
        Working with us is wonderful
      </h2>
      <ul role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        <li v-for="person in people" :key="person.name">
          <img class="aspect-[14/13] w-full rounded-2xl object-cover"
               :src="require(`@/assets/${person.imageUrl}`)"
               alt=""
          />
          <h3 class="mt-6 font-medium text-2xl leading-7">{{ person.name }}</h3>
          <p class="text-base leading-6 text-primary-800">{{ person.role }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import '../assets/style.css'
import {ref} from 'vue'
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'


const navigation = [
  {name: 'About', href: '#'},
  {name: 'Contact', href: '#'},
]

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
        'yaz.png',
    imageUrlHover: 'yaz-clean.png',
    location: 'Toronto, Canada',
    hover: false,
  },
  {
    name: 'Amir Rami',
    role: 'Backend Developer',
    imageUrl:
        'amir.png',
    imageUrlHover: 'amir-clean.png',
    location: 'Toronto, Canada',
    hover: false,
  },
  {
    name: 'Egzon Gollopeni',
    role: 'Frontend Developer & UI/UX',
    imageUrl:
        'egzi.png',
    imageUrlHover: 'egzi-clean.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'Pedro',
    role: 'Fullstack Developer',
    imageUrl:
        'pedro.png',
    imageUrlHover: 'pedro-clean.png',
    location: 'Toronto, Canada',
  },
]

const mobileMenuOpen = ref(false)

</script>