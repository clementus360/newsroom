
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


<a href={link}>
    <div style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url({image});" class="bg-gray-700 w-full flex flex-col px-8 py-4 pt-24 rounded-lg bg-cover">
        <button class="bg-white text-Secondary justify-self-start self-start rounded-lg flex items-center gap-4 py-1 px-4 w-max">
            {category}
        </button>
        <div class="flex flex-col gap-4 h-full justify-end">
            <h1 class="text-white text-sm w-full font-bold">{title}</h1>
        </div>
    </div>
</a>