import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { CategoryCardDetailed } from '../../components/CategoryCard';

const CategoryPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <CategoryCardDetailed categoryId={id} />;
};

CategoryPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default CategoryPage;
