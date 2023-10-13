<script>
    import ArticleCard from './ArticleCard.svelte'
	import CategoryCard from './CategoryCard.svelte';
	import Hero from './Hero.svelte';
	import PopularCard from './PopularCard.svelte';
	import Profile from './Profile.svelte';

    const LatestArticles = [
        {
        id: 1,
        category: 'Politics',
        title: 'Umuyobozi mukuru wa RDB yeguye',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-13'
    },
    {
        id: 2,
        category: 'Fashion',
        title: "Inzi y' imideli ya moshions yatangije igikorwa cya gira umwenda munyarwanda",
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-14'
    },
    {
        id: 3,
        category: 'Technology',
        title: 'Ibikorwa Byebye muri Tekinoloji',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-15'
    },
    {
        id: 4,
        category: 'Travel',
        title: 'Amavuko Yacu mu Mujyi mwiza',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-16'
    },{
        id: 5,
        category: 'Health',
        title: 'Amasano ya gusimba kubuzima',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-17'
    },
    {
        id: 6,
        category: 'Entertainment',
        title: 'Amakuru yasohokaga mu birori',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-18'
    },
    {
        id: 7,
        category: 'Sports',
        title: 'Ibitero byo kuvugurura Amakipe ya Perezida',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-19'
    },
    {
        id: 8,
        category: 'Science',
        title: 'Amakuru Ku Byigenga',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-20'
    },
    {
        id: 9,
        category: 'Food',
        title: 'Ibihaza Byiza bya Gutera',
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-21'
    },
    {
        id: 10,
        category: 'Education',
        title: "Amakuru ku iterambere ry'umurimo",
        image: '/3705677.jpg',
        link: '/',
        date: '2023-10-22'
    }
        
    ]


    LatestArticles.sort((a,b) => new Date(b.date) - new Date(a.date))

</script>

<div>
    <Hero />

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