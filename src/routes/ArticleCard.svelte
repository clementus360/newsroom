<script>
    /**
	 * @type {string}
	 */
     export let category
     
     /**
	 * @type {string}
	 */
      export let title

      /**
       * @type {string}
       */
      export let image

    /**
	 * @type {string}
	 */
     export let link

</script>

<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url({image});" class="h-[50vh] w-full flex flex-col px-16 py-12 rounded-lg bg-cover">
    <button class="bg-white text-Secondary justify-self-start self-start rounded-lg flex items-center gap-4 py-2 px-12 w-max">
        {category}
    </button>
    <div class="flex flex-col gap-4 h-full justify-end">
        <h1 class="text-white text-xl w-full font-bold">{title}</h1>
        <a href={link}>
            <button class="bg-Primary rounded-lg text-xl text-white font-bold flex items-center gap-4 py-2 px-8 w-max">
                Read more
            </button>
        </a>

    </div>
</div>