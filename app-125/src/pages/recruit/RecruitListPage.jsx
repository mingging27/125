import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import axios from '../../api/axiosInstance'; 
import RecruitCard from '../../components/recruit/RecruitCard';
import RecruitFilter from '../../components/recruit/RecruitFilter';

const PageWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  max-width: 1178px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const RecruitListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const res = await axios.get('/api/jobPosts');
        setPosts(res.data);
      } catch (error) {
        console.error('채용 공고 불러오기 실패:', error);
      }
    };

    fetchJobPosts();
  }, []);

  return (
    <>
      <Header />
      <PageWrapper>
        <h2>채용 정보</h2>
        <RecruitFilter />
        {posts.map((post) => (
          <RecruitCard key={post.job_post_id} post={post} />
        ))}
      </PageWrapper>
    </>
  );
};

export default RecruitListPage;
