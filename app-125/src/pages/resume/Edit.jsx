import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Create1 from "./Create1";
import Create2 from "./Create2";
import Create3 from "./Create3";
import Create4 from "./Create4";
import Create5 from "./Create5";
import Header from "../../components/Header";

function Edit() {
  const { id } = useParams(); // URL에서 id 가져오기
  const [step, setStep] = useState(1);

  // Create1 상태
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Create1 회원 정보 자동 입력
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://127.0.0.1:3002/api/user/info-for-resume", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("서버 응답 실패");

        const data = await res.json();

        setName(data.name || "");
        setAge(data.age?.toString() || "");
        setGender(data.gender || "");
        setAddress(data.address || "");
        setTel(data.phone || "");

        if (data.email) {
          const [localPart, domain] = data.email.split("@");
          setEmail1(localPart || "");
          setEmail2(domain || "");
        }
      } catch (err) {
        console.error("유저 정보 불러오기 실패:", err);
      }
    };

    fetchUserInfo();
  }, []);

  // Create2 상태
  const [school, setSchool] = useState("");
  const [status, setStatus] = useState("");
  const [careerStatus, setCareerStatus] = useState("");
  const [careers, setCareers] = useState([]);

  // Create3 상태
  const [regionList, setRegionList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const [isEditing2, setIsEditing2] = useState(false);
  const [period, setPeriod] = useState("무관");
  const [day, setDay] = useState("무관");
  const [time, setTime] = useState("무관");

  // Create4 상태
  const [certificateStatus, setCertificateStatus] = useState("");
  const [certificates, setCertificates] = useState([]);
  const [languageStatus, setLanguageStatus] = useState("");
  const [languages, setLanguages] = useState([]);

  // Create5 상태
  const [selfIntro, setSelfIntro] = useState("");

  // 기존 데이터 GET
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://127.0.0.1:3002/api/resumes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("서버 응답 실패");

        const data = await res.json();
        const r = data.resume;

        // Create1
        setTitle(r.resume_title || "");
        setSchool(r.school || "");
        setStatus(r.enrollment_status || "");
        setCareerStatus(r.career_type || "");
        setCareers(r.company_name ? [{ company: r.company_name, period: r.work_period_text }] : []);
        setRegionList(r.desired_location ? r.desired_location.split(", ").filter(Boolean) : []);
        setOccupationList(r.desired_job_category ? r.desired_job_category.split(", ").filter(Boolean) : []);
        setPeriod(r.desired_work_duration || "무관");
        setDay(r.preferredDays?.length > 0 ? r.preferredDays[0].day : "무관");
        setTime(r.preferred_time || "무관");
        setCertificateStatus(r.has_certificate ? "있음" : "없음");
        setCertificates(r.certificates?.map((c) => ({ name: c.certificate_name, year: c.acquisition_year })) || []);
        setLanguageStatus(r.has_language_score ? "있음" : "없음");
        setLanguages(r.languageScores?.map((l) => ({ name: l.test_name, score: l.score, year: l.acquisition_year })) || []);
        setSelfIntro(r.self_introduction || "");
      } catch (err) {
        console.error("기존 이력서 불러오기 실패:", err);
      }
    };

    fetchResume();
  }, [id]);

  const goNextStep = () => setStep((prev) => prev + 1);
  const goPrevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    // PUT 요청 코드 여기에 작성
  };

  return (
    <>
      <Header />
      {step === 1 && (
        <Create1
          title={title}
          setTitle={setTitle}
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          gender={gender}
          setGender={setGender}
          address={address}
          setAddress={setAddress}
          tel={tel}
          setTel={setTel}
          email1={email1}
          setEmail1={setEmail1}
          email2={email2}
          setEmail2={setEmail2}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          onNext={() => {
            setIsEditing(false);
            goNextStep();
          }}
        />
      )}
      {step === 2 && (
        <Create2
          school={school}
          setSchool={setSchool}
          status={status}
          setStatus={setStatus}
          careerStatus={careerStatus}
          setCareerStatus={setCareerStatus}
          careers={careers}
          setCareers={setCareers}
          onNext={goNextStep}
          goPrev={goPrevStep}
        />
      )}
      {step === 3 && (
        <Create3
          regionList={regionList}
          setRegionList={setRegionList}
          occupationList={occupationList}
          setOccupationList={setOccupationList}
          isEditing={isEditing2}
          setIsEditing={setIsEditing2}
          period={period}
          setPeriod={setPeriod}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          onNext={goNextStep}
          goPrev={goPrevStep}
        />
      )}
      {step === 4 && (
        <Create4
          certificateStatus={certificateStatus}
          setCertificateStatus={setCertificateStatus}
          certificates={certificates}
          setCertificates={setCertificates}
          languageStatus={languageStatus}
          setLanguageStatus={setLanguageStatus}
          languages={languages}
          setLanguages={setLanguages}
          onNext={goNextStep}
          goPrev={goPrevStep}
        />
      )}
      {step === 5 && <Create5 selfIntro={selfIntro} setSelfIntro={setSelfIntro} onSubmit={handleSubmit} goPrev={goPrevStep} />}
    </>
  );
}

export default Edit;
