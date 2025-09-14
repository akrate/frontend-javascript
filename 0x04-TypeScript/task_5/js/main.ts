// تعريف واجهات Nominal Typing باستخدام Brand

interface MajorCredits {
  credits: number;
  __brand: 'major';
}

interface MinorCredits {
  credits: number;
  __brand: 'minor';
}

// دوال الجمع

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}

// Exporting interfaces and functions (اختياري إذا كنت تريد استخدامها خارج الملف)
export {
  MajorCredits,
  MinorCredits,
  sumMajorCredits,
  sumMinorCredits
};
