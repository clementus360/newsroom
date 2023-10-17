<script>
    /** @type {import('./$types').PageData} */
    import ArticleCard from './ArticleCard.svelte'
	import CategoryCard from './CategoryCard.svelte';
	import Hero from './Hero.svelte';
	import PopularCard from './PopularCard.svelte';
	import Profile from './Profile.svelte';

    export let data;

    /**
	 * @type {{ id: any; title: any; category: any; article: any; link: string; image: string; }[]}
	 */
    let LatestArticles = []
    
    data.data.forEach((/** @type {{ id: any; attributes: { Title: any; Category: any; Article: any; Image: { data: { attributes: { url: string; }; }[]; }; }; }} */ article) => {

        LatestArticles.push({
            id: article.id,
            title: article.attributes.Title,
            category: article.attributes.Category,
            article: article.attributes.Article,
            link: `/articles/${article.id}`,
            image: 'http://localhost:1337' + article.attributes.Image.data[0].attributes.url
        })
    });

    // @ts-ignore
    LatestArticles.sort((a,b) => new Date(b.published) - new Date(a.published))

</script>

<div>
    <Hero {...LatestArticles[0]}/>

    <div class="flex flex-col gap-8 px-16 py-16">
        <h1 class="text-4xl font-bold">Latest Articles</h1>
        <div class="grid grid-cols-2 gap-16">
            {#each LatestArticles.slice(0,2) as article}
                <ArticleCard {...article}/>
            {/each}
        </div>
    </div>
    <Profile />
    <div class="flex flex-col gap-8 px-16 py-16">
        <h1 class="text-4xl font-bold">Browse Categories</h1>
        <div class="grid grid-cols-4 gap-16">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    </div>
    <div class="flex flex-col gap-8 px-16 py-16">
        <h1 class="text-4xl font-bold">Most Popular</h1>
        <div class="grid grid-cols-4 gap-8">
            {#each LatestArticles.slice(0,8) as article}
                <PopularCard {...article}/>
            {/each}
        </div>
    </div>
</div>