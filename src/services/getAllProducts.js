export default function getAllProducts() {
  return [
    {
      id: 'GC',
      slug: 'gacoan-pedas-001',
      name: 'Gacoan Pedas',
      category: `Gacoan Pedas`,
      categorySlug: 'gacoan',
      price: 11_000,
      stock: 100,
      imageUrl: '/assets/images/gacoan.jpeg',
      description: `gacoan level berapa pun tetap maknyussss`,
    },
    {
      id: 'DM',
      slug: 'siomay-ayam-001',
      name: 'Siomay Ayam',
      category: `Dimsum Siomay Ayam`,
      categorySlug: 'dimsum',
      price: 9_000,
      stock: 5,
      imageUrl: `/assets/images/somay ayam.jpeg`,
      description: `siomay ayam uenakkk sekaliiii.`,
    },
    {
      id: 'DM',
      slug: 'udang-keju-002',
      name: 'Udang Keju',
      category: `Dimsum Udang Keju`,
      categorySlug: 'dimsum',
      price: 9_000,
      stock: 0,
      imageUrl: `/assets/images/udang keju.jpeg`,
      description: `udang keju kejunya lumerrrrr.`,
    },
    {
      id: 'MNM',
      slug: 'air-mineral-001',
      name: 'Air Mineral',
      category: `Air Mineral`,
      categorySlug: 'minuman',
      price: 5_000,
      stock: 100,
      imageUrl: `/assets/images/air mineral.jpeg`,
      description: `Air mineral menyehatkan badan.`,
    },
    {
      id: 'MNM',
      slug: 'es-genderuwo-002',
      name: 'Es Genderuwo',
      category: `Es Genderuwo`,
      categorySlug: 'minuman',
      price: 10_000,
      stock: 5,
      imageUrl: `/assets/images/es genderuwo.jpeg`,
      description: `es yang palingg uenakkk.`,
    },
  ];
}