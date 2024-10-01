let currentPage = 1;
const itemsPerPage = 5;
let appliedFiltersArray = [];
let filteredPrograms = [];
let appliedFilters = {};
let appliedFiltersClassesArray = [];
const identifiersUsed = {
  addButtonWrapper: ".affiliate-programs-table-filter-add-category-wrapper",
};
let programs = [];
let categoryFilters = [];
let softwareFilters = [];
// const programs = [
//   {
//     id: 1,
//     name: "1CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 2,
//     name: "2Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "9 <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 3,
//     name: "3 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "10% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 4,
//     name: "4 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "50% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 5,
//     name: "5ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 6,
//     name: "6CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 7,
//     name: "7Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 8,
//     name: "8 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 9,
//     name: "9 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 10,
//     name: "10 ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 11,
//     name: "11CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 12,
//     name: "12Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//   },
//   {
//     id: 13,
//     name: "13 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 14,
//     name: "14 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 15,
//     name: "15ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 16,
//     name: "16CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 17,
//     name: "17Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 18,
//     name: "18 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 19,
//     name: "19 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 20,
//     name: "20 ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 21,
//     name: "21 CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 22,
//     name: "22 Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 23,
//     name: "23 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 24,
//     name: "24 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 25,
//     name: "25 ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 26,
//     name: "26 CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 27,
//     name: "27 Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 28,
//     name: "28 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 29,
//     name: "29 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 30,
//     name: "30 ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 31,
//     name: "31 CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 32,
//     name: "32 Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 33,
//     name: "33 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 34,
//     name: "34 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 35,
//     name: "35ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 36,
//     name: "36 CryptoBet Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 37,
//     name: "37 Bombastic Partners",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Casino",
//     link: `#`,
//   },
//   {
//     id: 38,
//     name: "38 10bet Africa Partners",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% <span>Revenue share</span>",
//     routy: false,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Sportsbook",
//     link: `#`,
//   },
//   {
//     id: 39,
//     name: "39 10x10 Bet Affiliates",
//     imageUrl: "https://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Bingo",
//     link: ``,
//   },
//   {
//     id: 40,
//     name: "40 ReadyCasino Affiliates",
//     imageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "https://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% <span>Revenue share</span>",
//     routy: true,
//     routyTickSrc: "https://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "https://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambl",
//     link: `#`,
//   },
// ];
async function fetchData() {
  const tableContentWrapper = document.querySelector(
    ".affiliate-programs-table-wrapper"
  );

  const tableDetailsContentWrapper = document.querySelector(
    ".affiliate-programs-list-details"
  );

  const contentWrapper = tableContentWrapper
    ? tableContentWrapper
    : tableDetailsContentWrapper;

  const loaderForTable = document.querySelector(
    ".loader-for-affiliate-programs-table"
  );

  loaderForTable.style.display = "block";
  contentWrapper.style.display = "none";

  const api1Url =
    "https://cms.routy.app/items/affiliate_programs/?limit=10000&fields[]=affiliate_program_software.name,affiliate_program_software.id,affiliate_program_software.logo,affiliate_program_software.thumbnail&fields[]=cms.*&fields[]=id,name,website_url,logo,thumbnail,date_created,date_updated&fields[]=verticals.item:.affiliate_programs_id&fields[]=verticals.verticals_id.name";
  const api2Url =
    "https://cms.routy.app/items/brands?limit=10000&fields[]=logo.id&fields[]=logo.type&fields[]=logo.title&fields[]=name&fields[]=website_url&fields[]=vertical.verticals_id.name&fields[]=vertical.verticals_id.id&fields[]=brand_platform_id.name&fields[]=brand_platform_id.id&fields[]=affiliate_program_id.affiliate_programs_id.name&fields[]=affiliate_program_id.affiliate_programs_id.id&fields[]=id&sort[]=id&page=1&filter[_and][0][$FOLLOW(brands_affiliate_programs,brands_id)][_none][affiliate_programs_id][_eq]=1000";

  try {
    const [response1, response2] = await Promise.all([
      fetch(api1Url, {
        method: "GET",
        headers: {
          Authorization: "Bearer fOlmmCfw0A0acjFSkb8lgBrhWfWsHNXL",
        },
      }),
      fetch(api2Url, {
        method: "GET",
        headers: {
          Authorization: "Bearer fOlmmCfw0A0acjFSkb8lgBrhWfWsHNXL",
        },
      }),
    ]);

    if (!response1.ok || !response2.ok) {
      throw new Error("One or both network responses were not ok");
    }

    const affiliateProgramsData = await response1.json();
    const brandsData = await response2.json();

    console.log("Fetched Data 1:", affiliateProgramsData);
    console.log("Fetched Data 2:", brandsData);

    const affiliateProgramsWithBrands = affiliateProgramsData.data.map(
      (item) => {
        const brands = brandsData.data
          .filter((brandsItem) =>
            brandsItem?.affiliate_program_id.some((brandAffiliateItems) => {
              return brandAffiliateItems?.affiliate_programs_id?.id === item.id;
            })
          )
          .map((matchedBrandItem) => matchedBrandItem.name);
        const category = item.verticals.map(
          (vertical) => vertical?.verticals_id?.name
        );

        return {
          ...item,
          brands: brands,
          category: category,
          routySupport:
            item?.routySupport != undefined ? item?.routySupport : true,
        };
      }
    );

    console.log(affiliateProgramsWithBrands);

    loaderForTable.style.display = "none";
    contentWrapper.style.display = "block";
    return affiliateProgramsWithBrands;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    contentWrapper.style.display = "block";
    loaderForTable.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  programs = await fetchData();
  filteredPrograms = [...programs];
  if (window.location.href.includes("elementor-19985")) {
    renderDetailsPageInfo();
    tabEvent();
  } else {
    renderList();
    renderPagination();
    softwareFilters = [
      ...new Set(
        programs
          .map((item) => item?.affiliate_program_software?.name)
          .filter((item) => item)
      ),
    ];
    renderSoftwareFilters();
    renderRoutySupportFilters();
    categoryFilters = [
      ...new Set(
        programs
          .map((item) => item.category)
          .filter((item) => item.length)
          .flat()
      ),
    ];
    renderCategoryFilters();
    filterArrowImage.addEventListener("click", (e) => {
      e.stopPropagation();
      if (filterDivDropdown.classList.contains("active")) {
        filterDivDropdown.classList.remove("active");
      } else {
        filterDivDropdown.classList.add("active");
      }
      if (sortDivDropdown.classList.contains("active")) {
        sortDivDropdown.classList.remove("active");
      }
      filterSearchBarWrapper.forEach((selected) => {
        const searchBarStyleInfo = window.getComputedStyle(selected);
        if (searchBarStyleInfo.display !== "none") {
          selected.style.display = "none";
          const searchInput = selected.querySelector("input");
          searchInput.value = "";
          selected.previousElementSibling.style.display = "flex";
          selected.parentElement.nextElementSibling.style.display = "none";
          // searchSoftwareFilters();
          searchFiltersUtility(
            "search-software-filter-id",
            "software",
            renderSoftwareFilters
          );
          searchFiltersUtility(
            "category-search-input-filter-id",
            "category",
            renderCategoryFilters
          );
          // searchCategoryFilters();
          searchRoutySupport();
        }
      });
    });

    sortDivDropdown.addEventListener("click", () => {
      filterSearchBarWrapper.forEach((selected) => {
        const searchBarStyleInfo = window.getComputedStyle(selected);
        if (searchBarStyleInfo.display !== "none") {
          selected.style.display = "none";
          const searchInput = selected.querySelector("input");
          searchInput.value = "";
          selected.previousElementSibling.style.display = "flex";
          selected.parentElement.nextElementSibling.style.display = "none";
          // searchSoftwareFilters();
          searchFiltersUtility(
            "search-software-filter-id",
            "software",
            renderSoftwareFilters
          );
          searchFiltersUtility(
            "category-search-input-filter-id",
            "category",
            renderCategoryFilters
          );
          // searchCategoryFilters();
          searchRoutySupport();
        }
      });
    });
    searchImageMobile.addEventListener("click", () => {
      if (searchInputMobileDiv.classList.contains("active")) {
        searchInputMobileDiv.classList.remove("active");
      } else {
        searchInputMobileDiv.classList.add("active");
      }
    });
  }
});

function renderList() {
  const list = document.getElementById("affiliate-programs-table-id");
  list.innerHTML = "";
  const displayedPrograms = filteredPrograms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  if (displayedPrograms.length === 0) {
    const item = document.createElement("div");
    item.className = "affiliate-programs-table-no-records-found-row";
    item.classList.add("affiliate-item-row");
    item.innerHTML = `No Record Found`;
    list.appendChild(item);
  } else {
    displayedPrograms.forEach((program) => {
      console.log(program.category);
      const item = document.createElement("div");
      item.className = "affiliate-item-row";
      item.innerHTML = `
            <a href="${`/routy-local/elementor-19985/?id=${program.id}`}" class="table-data-contents-row-flex">
                <div class="affiliate-programs-table-column-1 affiliate-programs-table-body-column-1-styling affiliate-programs-columns-with-image"><img src="${
                  program.thumbnail
                    ? program.thumbnail
                    : "http://127.0.0.1/routy-local/wp-content/uploads/2024/09/no-image-svg.svg"
                }" alt="affiliate program image" class="affiliate-program-logo-image"><div class="affiliate-programs-table-column-one-names-wrapper"><span class="affiliate-programs-table-column-one-program-name">${
        program.name
      }</span><span class="affiliate-programs-table-column-one-commissions">${
        program.cms?.commission ? program.cms?.commission : ""
      }</span></div></div>
<img src="https://routy.app/wp-content/uploads/2024/08/arrow-right-black-1.svg" alt="right arrow image" class="affiliate-programs-table-column-one-right-arrow">
<div class="affiliate-programs-table-column-2 affiliate-programs-table-body-column-2-styling affiliate-programs-columns-with-image"><img src="${
        program.affiliate_program_software?.logo
          ? program.affiliate_program_software?.logo
          : "http://127.0.0.1/routy-local/wp-content/uploads/2024/09/no-image-svg.svg"
      }" alt="software image" class="software-logo-image"><div>${
        program.affiliate_program_software?.name
          ? program.affiliate_program_software?.name
          : ""
      }</div></div>
                <div class="affiliate-programs-table-column-3 affiliate-programs-table-body-column-3-styling">${
                  program.cms?.commission ? program.cms?.commission : ""
                }</div>
<div class="affiliate-programs-table-column-4 affiliate-programs-table-body-column-4-styling">${
        program.routySupport
          ? `<img src="https://routy.app/wp-content/uploads/2024/07/tick-logo.svg" alt="blue tick image" class="routy-column-image-tick">`
          : `<img src='https://routy.app/wp-content/uploads/2024/07/cros-logo.svg' alt="purple cross image" class="routy-column-image-cross">`
      }
                </div>
                <div class="affiliate-programs-table-column-5 affiliate-programs-table-body-column-5-styling">${
                  // program.category.length > 0
                  //   ? program.category[0] + ", ..."
                  //   : `${
                  //       program.category.length == 1 ? program.category[0] : ""
                  //     }`
                  program.category.length > 3
                    ? program.category
                        .map((category) => `${category}`)
                        .splice(0, 3)
                        .join(", ") + ",..."
                    : program.category
                    ? program.category
                        .map((category) => `${category}`)
                        .splice(0, 3)
                        .join(", ")
                    : ""
                }</div>
                <div class="affiliate-programs-table-column-6 affiliate-programs-table-body-column-6-styling"><button class="affiliate-programs-table-column-6-join-button ${
                  program.website_url ? "active" : "disable"
                }" data-link="${
        program.website_url ? program.website_url : ""
      }">Join</button></div>
            </a>
       `;
      list.appendChild(item);
    });

    const dataItemsAnchor = document.querySelectorAll(
      ".table-data-contents-row-flex"
    );
    dataItemsAnchor.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        if (
          e.target.classList.contains(
            "affiliate-programs-table-column-6-join-button"
          )
        ) {
          e.preventDefault();
        }
      });
    });

    const joinButtonNodeList = document.querySelectorAll(
      ".affiliate-programs-table-body .affiliate-programs-table-column-6-join-button"
    );
    joinButtonNodeList.forEach((selected) => {
      selected.addEventListener("click", (e) => {
        if (!e.target.classList.contains("active")) {
          e.preventDefault();
        } else {
          window.location.href = e.target.getAttribute("data-link");
        }
      });
    });
  }
}

function renderPagination() {
  const pagination = document.getElementById(
    "affiliate-programs-table-pagination-id"
  );
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  pagination.innerHTML = "";
  const createButton = (text, page, isDisabled = false) => {
    const button = document.createElement("button");

    if (text === "<" || text === ">") {
      const img = document.createElement("img");
      img.src =
        text === "<"
          ? "https://routy.app/wp-content/uploads/2024/07/pagination-left-arrow.svg"
          : "https://routy.app/wp-content/uploads/2024/07/pagination-right-arrow.svg";
      img.alt = text;
      img.style.width = "20px";
      img.style.height = "20px";
      button.appendChild(img);
    } else {
      button.innerText = text;
    }

    if (page === currentPage) {
      button.className =
        "affiliate-program-table-pagination-page-number affiliate-program-table-pagination-button-active";
    } else {
      button.className = "affiliate-program-table-pagination-page-number";
    }

    if (isDisabled) {
      button.disabled = true;
      button.classList.add("disabled-pagination-button");
    }

    if (!isDisabled) {
      button.addEventListener("click", () => goToPage(page));
    }
    return button;
  };

  pagination.appendChild(createButton("<", currentPage - 1, currentPage === 1));

  if (totalPages <= 8) {
    for (let i = 1; i <= totalPages; i++) {
      pagination.appendChild(createButton(i, i));
    }
  } else {
    pagination.appendChild(createButton(1, 1));

    if (currentPage > 3) {
      const ellipsisStart = document.createElement("span");
      ellipsisStart.innerText = "...";
      pagination.appendChild(ellipsisStart);
    }
    const previousPage = Math.max(1, currentPage - 1);
    const nextPage = Math.min(totalPages, currentPage + 1);

    if (currentPage > 2) {
      pagination.appendChild(createButton(previousPage, previousPage));
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      pagination.appendChild(createButton(currentPage, currentPage));
    }

    if (currentPage < totalPages - 1) {
      pagination.appendChild(createButton(nextPage, nextPage));
    }

    if (currentPage < totalPages - 2) {
      const ellipsisEnd = document.createElement("span");
      ellipsisEnd.innerText = "...";
      pagination.appendChild(ellipsisEnd);
    }

    pagination.appendChild(createButton(totalPages, totalPages));
  }

  pagination.appendChild(
    createButton(">", currentPage + 1, currentPage === totalPages)
  );
}

//   const createButton = (text, page) => {
//     const button = document.createElement("button");
//     if (text === "<" || text === ">") {
//       const img = document.createElement("img");
//       img.src =
//         text === "<"
//           ? "https://routy.app/wp-content/uploads/2024/07/pagination-left-arrow.svg"
//           : "https://routy.app/wp-content/uploads/2024/07/pagination-right-arrow.svg";
//       img.alt = text;
//       img.style.width = "20px";
//       img.style.height = "20px";
//       button.appendChild(img);
//     } else {
//       button.innerText = text;
//     }
//     if (page === currentPage) {
//       button.className =
//         "affiliate-program-table-pagination-page-number affiliate-program-table-pagination-button-active";
//     } else {
//       button.className = "affiliate-program-table-pagination-page-number";
//     }
//     button.addEventListener("click", () => goToPage(page));
//     return button;
//   };

//   pagination.appendChild(createButton("<", currentPage - 1));

//   if (totalPages <= 8) {
//     for (let i = 1; i <= totalPages; i++) {
//       pagination.appendChild(createButton(i, i));
//     }
//   } else {
//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = Math.min(totalPages, currentPage + 2);

//     if (currentPage <= 4) {
//       startPage = 1;
//       endPage = 5;
//     } else if (currentPage + 3 >= totalPages) {
//       startPage = totalPages - 4;
//       endPage = totalPages;
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pagination.appendChild(createButton(i, i));
//     }

//     if (currentPage + 3 < totalPages) {
//       const ellipsis = document.createElement("span");
//       ellipsis.innerText = "...";
//       pagination.appendChild(ellipsis);
//       pagination.appendChild(createButton(totalPages, totalPages));
//     }
//   }

//   pagination.appendChild(createButton(">", currentPage + 1));
// }

// // function changePage(direction) {
// //   currentPage += direction;
// //   if (currentPage < 1) currentPage = 1;
// //   if (currentPage > Math.ceil(filteredPrograms.length / itemsPerPage))
// //     currentPage = Math.ceil(filteredPrograms.length / itemsPerPage);
// //   renderList();
// //   renderPagination();
// // }

function goToPage(page) {
  if (page < 1) page = 1;
  if (page > Math.ceil(filteredPrograms.length / itemsPerPage))
    page = Math.ceil(filteredPrograms.length / itemsPerPage);
  currentPage = page;
  renderList();
  renderPagination();
}

function renderDetailsPageInfo() {
  const detailsPageUrl = window.location.href;
  const urlObject = new URL(detailsPageUrl);
  const params = new URLSearchParams(urlObject.search);
  const paramId = params.get("id");
  if (paramId) {
    const objectVal = programs.find((o) => o.id === parseInt(paramId));
    renderDetailsBannerandtab(objectVal);
  }
}

function renderDetailsBannerandtab(obj) {
  const bannerLogoImage = document.getElementById(
    "affiliate-programs-list-details-banner-logo-image-id"
  );
  const bannerHeadingDiv = document.getElementById(
    "affiliate-programs-list-details-banner-heading-id"
  );
  const bannerYearFoundedDiv = document.getElementById(
    "affiliate-programs-list-details-year-founded-lower-div-id"
  );
  const bannerRevenueShareDiv = document.getElementById(
    "affiliate-programs-list-details-revenue-info-lower-div-id"
  );
  const bannerSoftwareDiv = document.getElementById(
    "affiliate-programs-list-details-software-info-lower-div"
  );
  const joinButton = document.querySelectorAll(
    ".affiliate-programs-list-details-join-program-button"
  );

  const routyConnectButton = document.querySelectorAll(
    ".affiliate-programs-list-details-connect-button"
  );
  console.log(routyConnectButton);
  const tabsDataName = document.getElementById(
    "affiliate-programs-list-details-tabs-data-name"
  );
  const tabsDataBrand = document.getElementById(
    "affiliate-programs-list-details-tabs-data-brand"
  );
  const tabsDataEmail = document.getElementById(
    "affiliate-programs-list-details-tabs-data-email"
  );
  const tabsDataTags = document.getElementById(
    "affiliate-programs-list-details-tabs-data-tags"
  );
  const tabsDataOwnership = document.getElementById(
    "affiliate-programs-list-details-tabs-data-ownership"
  );
  const tabsDataGameTypes = document.getElementById(
    "affiliate-programs-list-details-tabs-data-game-types"
  );
  const tabsDataLanguages = document.getElementById(
    "affiliate-programs-list-details-tabs-data-languages"
  );
  const tabsDataRequirements = document.getElementById(
    "affiliate-programs-list-details-tabs-data-requirements"
  );
  const tabsTermsAndConditions = document.getElementById(
    "affiliate-programs-list-details-data-tabs-terms-and-conditions"
  );
  const tabsDataPhone = document.getElementById(
    "affiliate-programs-list-details-tabs-data-phone"
  );
  const tabsDataSkype = document.getElementById(
    "affiliate-programs-list-details-tabs-data-skype"
  );
  const tabsDataApprovalRate = document.getElementById(
    "affiliate-programs-list-details-tabs-data-approval-rate"
  );
  bannerLogoImage.src = obj.logo || "";
  bannerHeadingDiv.innerHTML = obj.name || "";
  bannerYearFoundedDiv.innerHTML = obj.cms?.launched_at || "";
  bannerRevenueShareDiv.innerHTML = obj.cms?.commission || "";
  bannerSoftwareDiv.innerHTML = obj?.affiliate_program_software?.name || "";
  joinButton.forEach(
    (joinBtn) => (joinBtn.href = obj.cms?.sub_affiliat_link || "")
  );
  routyConnectButton.forEach((connectbtn) => (connectbtn.href = "#"));
  tabsDataName.innerHTML = obj.name || "";
  tabsDataBrand.innerHTML =
    obj.brands.length > 3
      ? obj.brands
          .map((brand) => `${brand} `)
          .splice(0, 3)
          .join(", ") + ",..."
      : obj.brands
      ? obj.brands
          .map((brand) => `${brand}`)
          .splice(0, 3)
          .join(", ")
      : "";
  tabsDataEmail.innerHTML = obj.cms?.contact_email || "";
  tabsDataEmail.setAttribute(
    "href",
    `mailto:${obj.cms?.contact_email ? obj.cms?.contact_email : ""}`
  );
  tabsDataTags.innerHTML =
    obj.cms?.tags.length > 3
      ? obj.cms?.tags
          .map((tag) => `${tag} `)
          .splice(0, 3)
          .join(", ") + ",..."
      : obj.cms.tags
      ? obj.cms.tags
          .map((tag) => `${tag}`)
          .splice(0, 3)
          .join(", ")
      : "";
  tabsDataOwnership.innerHTML = obj.cms?.ownership || "";
  tabsDataGameTypes.innerHTML = "";
  tabsDataLanguages.innerHTML = "";
  tabsDataRequirements.innerHTML = obj?.requirements || "";
  tabsTermsAndConditions.innerHTML = obj.cms?.terms_and_condition_url || "";
  tabsDataPhone.innerHTML = obj.cms?.contact_phone_number || "";
  tabsDataPhone.setAttribute(
    "href",
    `tel:${obj.cms?.contact_phone_number ? obj.cms?.contact_phone_number : ""}`
  );
  tabsDataSkype.innerHTML = obj.cms?.contact_skype || "";
  tabsDataApprovalRate.innerHTML = obj.approvalRate || "";
}

function sortProgramsByName() {
  const arrowImage = document.getElementById(
    "affiliate-program-arrow-image-id"
  );
  let count = 0;
  const arrowImageClasses = arrowImage.classList;
  for (classname of arrowImageClasses) {
    if (classname === "active") {
      count++;
    }
  }
  if (!count) {
    arrowImage.classList.add("active");
    filteredPrograms.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else {
    arrowImage.classList.remove("active");
    filteredPrograms.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  currentPage = 1;
  renderList();
  renderPagination();
}

function sortPrograms(sortValue) {
  if (sortValue.toLowerCase() === "newest first") {
    filteredPrograms.sort((a, b) => {
      return b.id - a.id;
    });
  } else {
    filteredPrograms.sort((a, b) => {
      return a.id - b.id;
    });
  }
  currentPage = 1;
  renderList();
  renderPagination();
}

function searchPrograms(currentArray, searchValue) {
  if (searchValue.trim() == "") {
    return currentArray;
  }
  const searchedPrograms = currentArray.filter(
    (program) =>
      program.name.toLowerCase().includes(searchValue.trim()) ||
      program?.affiliate_program_software?.name
        .toLowerCase()
        .includes(searchValue.trim()) ||
      program.cms?.commission?.toLowerCase().includes(searchValue.trim())
  );
  return searchedPrograms;
}

const selectedAll = document.querySelectorAll(".wrapper-dropdown");
console.log(selectedAll);

selectedAll.forEach((selected) => {
  const optionsList = selected.querySelectorAll(
    "div.wrapper-dropdown.affiliate-programs-table-sort-div-dropdown li"
  );

  selected.addEventListener("click", (e) => {
    if (
      selected.classList.contains("active") &&
      e.target.closest(".affiliate-programs-table-filter-div-dropdown") === null
    ) {
      handleDropdown(selected, false);
    } else {
      let currentActive = document.querySelector(".wrapper-dropdown.active");
      if (currentActive) {
        if (
          !(
            currentActive.classList.contains(
              "affiliate-programs-table-filter-div-dropdown"
            ) &&
            e.target.closest(
              ".affiliate-programs-table-filter-div-dropdown"
            ) !== null
          )
        ) {
          handleDropdown(currentActive, false);
        }
      }
      handleDropdown(selected, true);
    }
  });

  for (let o of optionsList) {
    o.addEventListener("click", () => {
      selected.querySelector(
        ".affiliate-programs-table-sort-selected-display"
      ).innerHTML = o.innerHTML;
      sortPrograms(o.innerHTML);
    });
  }
});

window.addEventListener("click", function (e) {
  const filterSearchBarWrapper = document.querySelectorAll(
    ".affiliate-programs-table-filter-search-bar-wrapper"
  );
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
    filterSearchBarWrapper.forEach((selected) => {
      const searchBarStyleInfo = window.getComputedStyle(selected);
      if (searchBarStyleInfo.display !== "none") {
        selected.style.display = "none";
        const searchInput = selected.querySelector("input");
        searchInput.value = "";
        selected.previousElementSibling.style.display = "flex";
        selected.parentElement.nextElementSibling.style.display = "none";
        // searchSoftwareFilters();
        searchFiltersUtility(
          "search-software-filter-id",
          "software",
          renderSoftwareFilters
        );
        searchFiltersUtility(
          "category-search-input-filter-id",
          "category",
          renderCategoryFilters
        );
        // searchCategoryFilters();
        searchRoutySupport();
      }
    });
  }
});

function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    handleDropdown(selected, false);
  });
}

function handleDropdown(dropdown, open) {
  if (open) {
    dropdown.classList.add("active");
  } else {
    dropdown.classList.remove("active");
  }
}

const selectedAddFilter = document.querySelectorAll(
  ".affiliate-programs-table-filter-add-category-wrapper"
);
console.log(selectedAddFilter);

selectedAddFilter.forEach((selected) => {
  selected.addEventListener("click", function (e) {
    e.target.closest(
      ".affiliate-programs-table-filter-add-category-wrapper"
    ).style.display = "none";
    e.target
      .closest(".affiliate-programs-table-filter-categories-li")
      .querySelector(
        ".affiliate-programs-table-filter-search-bar-wrapper"
      ).style.display = "flex";
    e.target.querySelector(
      ".affiliate-programs-table-filter-search-bar-wrapper"
    );
    e.target.closest(
      ".affiliate-programs-table-filter-categories-li"
    ).nextElementSibling.style.display = "flex";
  });
});

const selectedFilterSearchCross = document.querySelectorAll(
  ".affiliate-programs-table-filter-search-cross-image"
);
selectedFilterSearchCross.forEach((selected) => {
  selected.addEventListener("click", function (e) {
    e.target
      .closest(".affiliate-programs-table-filter-categories-li")
      .querySelector(
        ".affiliate-programs-table-filter-search-bar-wrapper"
      ).style.display = "none";
    e.target
      .closest(".affiliate-programs-table-filter-categories-li")
      .querySelector(
        ".affiliate-programs-table-filter-add-category-wrapper"
      ).style.display = "flex";
    e.target.closest(
      ".affiliate-programs-table-filter-categories-li"
    ).nextElementSibling.style.display = "none";
    e.target
      .closest(".affiliate-programs-table-filter-categories-li")
      .querySelector(
        ".affiliate-programs-table-filter-search-bar-wrapper input"
      ).value = "";
    // searchSoftwareFilters();
    searchFiltersUtility(
      "search-software-filter-id",
      "software",
      renderSoftwareFilters
    );
    searchFiltersUtility(
      "category-search-input-filter-id",
      "category",
      renderCategoryFilters
    );
    // searchCategoryFilters();
    searchRoutySupport();
  });
});

// let softwareFilters = [
//   ...new Set(programs.map((item) => item.affiliate_software_program?.name)),
// ];

const softwareFiltersDiv = document.getElementById(
  "affiliate-programs-table-software-filters-container-id"
);

function renderSoftwareFilters() {
  softwareFiltersDiv.innerHTML = "";
  if (softwareFilters.length === 0) {
    const softwareDiv = document.createElement("div");
    softwareDiv.classList.add(
      "affiliate-programs-table-filters-search-no-record"
    );
    softwareDiv.innerHTML = "No Item Found";
    softwareFiltersDiv.appendChild(softwareDiv);
  } else {
    softwareFilters.forEach((item) => {
      const softwareDiv = document.createElement("div");
      softwareDiv.innerHTML = item;
      softwareDiv.addEventListener("click", (e) => {
        renderUtilityFunction(
          e,
          ".affiliate-programs-table-software-filters-items-wrapper",
          "affiliate-programs-table-selected-software",
          "software"
        );
      });

      softwareFiltersDiv.appendChild(softwareDiv);
    });
  }
}

// renderSoftwareFilters();

function renderUtilityFunction(e, wrapperClassName, typeClass, type) {
  appliedFiltersArray.push(e.target.innerHTML);
  appliedFiltersClassesArray.push(typeClass);
  appliedFilters = { ...appliedFilters, [type]: e.target.innerHTML };
  renderSelectedFilters();
  filterHandler();
  e.target.closest(wrapperClassName).style.display = "none";
  e.target
    .closest(wrapperClassName)
    .previousElementSibling.querySelector(
      ".affiliate-programs-table-filter-search-bar-wrapper"
    ).style.display = "none";
  e.target
    .closest(wrapperClassName)
    .previousElementSibling.querySelector(
      ".affiliate-programs-table-selected-filter"
    ).style.display = "flex";
  e.target
    .closest(wrapperClassName)
    .previousElementSibling.querySelector(
      ".affiliate-programs-table-selected-filter"
    )
    .classList.add(typeClass);
  e.target
    .closest(wrapperClassName)
    .previousElementSibling.querySelector(
      ".affiliate-programs-table-selected-filter"
    ).innerHTML = `<div>${e.target.innerHTML}</div> <img src="https://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image">`;
  e.target
    .closest(wrapperClassName)
    .previousElementSibling.querySelector(
      ".affiliate-programs-table-selected-filter .affiliate-program-table-filter-category-cross-image"
    )
    .addEventListener("click", function (e) {
      let updatedAppliedFiltersArray = appliedFiltersArray.filter((item) => {
        if (
          e.target.closest(".affiliate-programs-table-selected-filter")
            .children[0].innerHTML
        ) {
          return !(
            item ==
            e.target.closest(".affiliate-programs-table-selected-filter")
              .children[0].innerHTML
          );
        }
      });
      appliedFiltersArray = [...updatedAppliedFiltersArray];
      let updatedAppliedFiltersClassesArray = appliedFiltersClassesArray.filter(
        (item) => item !== typeClass
      );
      appliedFiltersClassesArray = [...updatedAppliedFiltersClassesArray];
      delete appliedFilters[type];
      renderSelectedFilters();
      filterHandler();
      e.target.closest(
        ".affiliate-programs-table-selected-filter"
      ).style.display = "none";
      e.target
        .closest(".affiliate-programs-table-filter-categories-li")
        .querySelector(
          ".affiliate-programs-table-filter-add-category-wrapper"
        ).style.display = "flex";
    });
}

const routySupportFiltersPrimary = ["Yes", "No"];
const routySupportFiltersDiv = document.getElementById(
  "affiliate-programs-table-routy-support-filters-container-id"
);

let routySupportFiltersSecondary = [...routySupportFiltersPrimary];

function renderRoutySupportFilters() {
  routySupportFiltersDiv.innerHTML = "";
  if (routySupportFiltersSecondary.length === 0) {
    const routySupportDiv = document.createElement("div");
    routySupportDiv.classList.add(
      "affiliate-programs-table-filters-search-no-record"
    );
    routySupportDiv.innerHTML = "No Item Found";
    routySupportFiltersDiv.appendChild(routySupportDiv);
  } else {
    routySupportFiltersSecondary.forEach((item) => {
      const routySupportDiv = document.createElement("div");
      routySupportDiv.classList.add(
        "affiliate-programs-table-routy-support-filter-select-choice-button"
      );
      routySupportDiv.innerHTML = item;
      routySupportDiv.addEventListener("click", (e) => {
        appliedFiltersArray.push(
          e.target.innerHTML.toLowerCase() == "yes"
            ? "Routy Supported"
            : "Not Supported"
        );
        appliedFiltersClassesArray.push(
          "affiliate-programs-table-selected-routy-support"
        );
        renderSelectedFilters();
        appliedFilters = {
          ...appliedFilters,
          routySupport:
            e.target.innerHTML.toLowerCase() === "yes" ? true : false,
        };
        filterHandler();
        e.target.closest(
          ".affiliate-programs-table-routy-support-filters-items-wrapper"
        ).style.display = "none";
        e.target
          .closest(
            ".affiliate-programs-table-routy-support-filters-items-wrapper"
          )
          .previousElementSibling.querySelector(
            ".affiliate-programs-table-filter-search-bar-wrapper"
          ).style.display = "none";
        e.target
          .closest(
            ".affiliate-programs-table-routy-support-filters-items-wrapper"
          )
          .previousElementSibling.querySelector(
            ".affiliate-programs-table-selected-filter"
          ).style.display = "flex";
        e.target
          .closest(
            ".affiliate-programs-table-routy-support-filters-items-wrapper"
          )
          .previousElementSibling.querySelector(
            ".affiliate-programs-table-selected-filter"
          )
          .classList.add("affiliate-programs-table-selected-routy-support");
        e.target
          .closest(
            ".affiliate-programs-table-routy-support-filters-items-wrapper"
          )
          .previousElementSibling.querySelector(
            ".affiliate-programs-table-selected-filter"
          ).innerHTML = `<div>${
          e.target.innerHTML.toLowerCase() == "yes"
            ? "Routy Supported"
            : "Not Supported"
        }</div> <img src="https://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image">`;
        e.target
          .closest(
            ".affiliate-programs-table-routy-support-filters-items-wrapper"
          )
          .previousElementSibling.querySelector(
            ".affiliate-programs-table-selected-filter .affiliate-program-table-filter-category-cross-image"
          )
          .addEventListener("click", function (e) {
            let updatedAppliedFiltersArray = appliedFiltersArray.filter(
              (item) => {
                if (
                  e.target.closest(".affiliate-programs-table-selected-filter")
                    .children[0].innerHTML
                ) {
                  return !(
                    item ==
                    e.target.closest(
                      ".affiliate-programs-table-selected-filter"
                    ).children[0].innerHTML
                  );
                }
              }
            );
            appliedFiltersArray = [...updatedAppliedFiltersArray];
            let updatedAppliedFiltersClassesArray =
              appliedFiltersClassesArray.filter(
                (item) =>
                  item !== "affiliate-programs-table-selected-routy-support"
              );
            appliedFiltersClassesArray = [...updatedAppliedFiltersClassesArray];
            renderSelectedFilters();
            delete appliedFilters["routySupport"];
            filterHandler();
            e.target.closest(
              ".affiliate-programs-table-selected-filter"
            ).style.display = "none";
            e.target
              .closest(".affiliate-programs-table-filter-categories-li")
              .querySelector(
                ".affiliate-programs-table-filter-add-category-wrapper"
              ).style.display = "flex";
          });
      });
      routySupportFiltersDiv.appendChild(routySupportDiv);
    });
  }
}

// renderRoutySupportFilters();

// let categoryFilters = [...new Set(programs.map((item) => item.name))];

const categoryFiltersDiv = document.getElementById(
  "affiliate-programs-table-category-filters-container-id"
);

function renderCategoryFilters() {
  categoryFiltersDiv.innerHTML = "";
  console.log(categoryFilters);
  if (categoryFilters.length === 0) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add(
      "affiliate-programs-table-filters-search-no-record"
    );
    categoryDiv.innerHTML = "No Item Found";
    categoryFiltersDiv.appendChild(categoryDiv);
  } else {
    categoryFilters.forEach((item) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.innerHTML = item;
      categoryDiv.addEventListener("click", (e) => {
        renderUtilityFunction(
          e,
          ".affiliate-programs-table-category-filters-items-wrapper",
          "affiliate-programs-table-selected-category",
          "category"
        );
      });
      categoryFiltersDiv.appendChild(categoryDiv);
    });
  }
}

// renderCategoryFilters();

// function searchSoftwareFilters() {
//   const softwareSearchInput = document
//     .getElementById("search-software-filter-id")
//     .value.toLowerCase();
//   let searchFilteredSoftwares = programs.filter((item) =>
//     item.software.toLowerCase().includes(softwareSearchInput)
//   );
//   softwareFilters = [
//     ...new Set(searchFilteredSoftwares.map((item) => item.software)),
//   ];
//   renderSoftwareFilters();
// }

//due to the assignment issue for  reference of the arrays have used global arrays directly with if else
function searchFiltersUtility(
  searchInputElement,
  filterType,
  renderingFilterArrayFunction
) {
  const searchInputType = document
    .getElementById(searchInputElement)
    .value.toLowerCase()
    .trim();
  if (filterType == "software") {
    let searchFilteredItems = programs.filter((item) =>
      // item[filterType].toLowerCase().includes(searchInputType)
      item.affiliate_program_software?.name
        .toLowerCase()
        .includes(searchInputType)
    );
    softwareFilters = [
      ...new Set(
        searchFilteredItems.map((item) => item.affiliate_program_software?.name)
      ),
    ];
  } else {
    let searchFilteredItems = programs
      .filter((item) => item.category.length)
      .map((item) => item.category)
      .flat()
      .filter((item) => item.toLowerCase().includes(searchInputType));
    // let searchFilteredItems = programs.filter((item) =>
    //   item[filterType].toLowerCase().includes(searchInputType)
    // );
    categoryFilters = [
      // ...new Set(searchFilteredItems.map((item) => item[filterType])),
      ...new Set(searchFilteredItems.map((item) => item)),
    ];
  }
  renderingFilterArrayFunction();
}

function searchCategoryFilters() {
  const categorySearchInput = document
    .getElementById("category-search-input-filter-id")
    .value.toLowerCase();
  let searchFilteredCategories = programs.filter((item) =>
    item.category.toLowerCase().includes(categorySearchInput.trim())
  );
  categoryFilters = [
    ...new Set(searchFilteredCategories.map((item) => item.name)),
  ];
  renderCategoryFilters();
}

function searchRoutySupport() {
  const routySupportSearchInput = document
    .getElementById("routy-support-search-input-filter-id")
    .value.toLowerCase()
    .trim();
  routySupportFiltersSecondary = routySupportFiltersPrimary.filter((item) =>
    item.toLowerCase().includes(routySupportSearchInput)
  );
  renderRoutySupportFilters();
}

function renderSwitchCase(e) {
  switch (e.target.id) {
    case "affiliate-programs-table-selected-software":
      delete appliedFilters["software"];
      filterHandler();
      break;
    case "affiliate-programs-table-selected-routy-support":
      delete appliedFilters["routySupport"];
      filterHandler();
      break;
    case "affiliate-programs-table-selected-category":
      delete appliedFilters["category"];
      filterHandler();
      break;
    default:
  }
}

function renderSelectedFiltersUtility(e) {
  e.stopPropagation();
  let updatedAppliedFiltersArray = appliedFiltersArray.filter((item) => {
    if (
      e.target.closest(".affiliate-program-table-filter-categories").children[0]
        .innerHTML
    ) {
      return !(
        item ==
        e.target.closest(".affiliate-program-table-filter-categories")
          .children[0].innerHTML
      );
    }
  });
  appliedFiltersArray = [...updatedAppliedFiltersArray];
  let updatedAppliedFiltersClassesArray = appliedFiltersClassesArray.filter(
    (item) => item !== e.target.id
  );
  appliedFiltersClassesArray = [...updatedAppliedFiltersClassesArray];
  const selectedFiltersLi = filterDivDropdown.querySelectorAll(
    ".affiliate-programs-table-selected-filter"
  );
  selectedFiltersLi.forEach((selected) => {
    if (selected.classList.contains(e.target.id)) {
      selected.style.display = "none";
      selected
        .closest(".affiliate-programs-table-filter-categories-li")
        .querySelector(
          ".affiliate-programs-table-filter-add-category-wrapper"
        ).style.display = "flex";
    }
  });
}

function renderSelectedFilters() {
  const filterMiddleDiv = document.getElementById(
    "affiliate-programs-table-filter-middle-div-id"
  );
  const selectedFiltersDisplayDiv = document.getElementById(
    "affiliate-programs-table-selected-filters-display-div-id"
  );
  if (appliedFiltersArray.length >= 1 && appliedFiltersArray.length <= 3) {
    filterMiddleDiv.innerHTML = "";
    selectedFiltersDisplayDiv.classList.add("active");
    selectedFiltersDisplayDiv.innerHTML = "";
    filterMiddleDiv.innerHTML = `<div class="affiliate-program-table-filter-categories"><div>${appliedFiltersArray[0]}</div><img src="https://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[0]}" ></div>`;
    filterMiddleDiv
      .querySelector(".affiliate-program-table-filter-category-cross-image")
      .addEventListener("click", (e) => {
        renderSelectedFiltersUtility(e);
        renderSwitchCase(e);
        renderSelectedFilters();
      });
    for (let i = 1; i < appliedFiltersArray.length; i++) {
      const selectedFilterItem = document.createElement("div");
      selectedFilterItem.classList.add(
        "affiliate-program-table-filter-categories"
      );
      selectedFilterItem.innerHTML = `<div>${appliedFiltersArray[i]}</div><img src="https://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[i]}">`;
      selectedFiltersDisplayDiv.appendChild(selectedFilterItem);
    }
    if (appliedFiltersArray.length == 1) {
      selectedFiltersDisplayDiv.innerHTML = "";
      selectedFiltersDisplayDiv.classList.remove("active");
    }
    const filterSelectedFiltersRowCrossImages =
      selectedFiltersDisplayDiv.querySelectorAll(
        ".affiliate-program-table-filter-category-cross-image"
      );
    filterSelectedFiltersRowCrossImages.forEach((crossImage) => {
      crossImage.addEventListener("click", (e) => {
        renderSelectedFiltersUtility(e);
        renderSwitchCase(e);
        renderSelectedFilters();
      });
    });
  } else if (appliedFiltersArray.length > 3) {
    filterMiddleDiv.innerHTML = "";
    selectedFiltersDisplayDiv.classList.add("active");
    selectedFiltersDisplayDiv.innerHTML = "";
    filterMiddleDiv.innerHTML = `<div class="affiliate-program-table-filter-categories"><div>${appliedFiltersArray[0]}</div><img src="https://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[0]}"></div>`;
    filterMiddleDiv
      .querySelector(".affiliate-program-table-filter-category-cross-image")
      .addEventListener("click", (e) => {
        renderSelectedFiltersUtility(e);
        renderSwitchCase(e);
        renderSelectedFilters();
      });
    const selectedFilterItemLeft = document.createElement("div");
    selectedFilterItemLeft.classList.add(
      "affiliate-program-table-filter-categories"
    );
    selectedFilterItemLeft.innerHTML = `<div>${appliedFiltersArray[1]}</div><img src="https://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[1]}">`;
    selectedFiltersDisplayDiv.appendChild(selectedFilterItemLeft);
    const selectedFilterItemMiddle = document.createElement("div");
    selectedFilterItemMiddle.classList.add(
      "affiliate-program-table-filter-categories"
    );
    const filterSelectedFiltersRowCrossImages =
      selectedFiltersDisplayDiv.querySelectorAll(
        ".affiliate-program-table-filter-category-cross-image"
      );
    filterSelectedFiltersRowCrossImages.forEach((crossImage) => {
      crossImage.addEventListener("click", (e) => {
        renderSelectedFiltersUtility(e);
        renderSwitchCase(e);
        renderSelectedFilters();
      });
    });
    selectedFilterItemMiddle.innerHTML = `<div>+2 others</div>`;
    selectedFiltersDisplayDiv.appendChild(selectedFilterItemMiddle);
  } else {
    filterMiddleDiv.innerHTML = "";
    selectedFiltersDisplayDiv.innerHTML = "";
    selectedFiltersDisplayDiv.classList.remove("active");
  }
}

function applyFilters(currentArray) {
  const filteredItems = currentArray.filter((program) => {
    for (let filterCategory in appliedFilters) {
      if (
        filterCategory === "software" &&
        program.affiliate_program_software?.name !==
          appliedFilters[filterCategory]
      ) {
        return false;
      }
      if (
        filterCategory === "routySupport" &&
        program?.routySupport !== appliedFilters[filterCategory]
      ) {
        return false;
      }
      if (
        filterCategory === "category" &&
        program.category.every(
          (item) => item !== appliedFilters[filterCategory]
        )
      ) {
        return false;
      }
    }
    return true;
  });
  return filteredItems;
}

const filterArrowImage = document.getElementById(
  "affiliate-programs-table-filter-right-image-id"
);
const filterDivDropdown = document.querySelector(
  ".affiliate-programs-table-filter-div-dropdown"
);

const filterSearchBarWrapper = document.querySelectorAll(
  ".affiliate-programs-table-filter-search-bar-wrapper"
);

const sortDivDropdown = document.querySelector(
  ".affiliate-programs-table-sort-div-dropdown"
);

// filterArrowImage.addEventListener("click", (e) => {
// e.stopPropagation();
// if (filterDivDropdown.classList.contains("active")) {
// filterDivDropdown.classList.remove("active");
// } else {
// filterDivDropdown.classList.add("active");
// }
// if (sortDivDropdown.classList.contains("active")) {
// sortDivDropdown.classList.remove("active");
// }
// filterSearchBarWrapper.forEach((selected) => {
// const searchBarStyleInfo = window.getComputedStyle(selected);
// if (searchBarStyleInfo.display !== "none") {
// selected.style.display = "none";
// const searchInput = selected.querySelector("input");
// searchInput.value = "";
// selected.previousElementSibling.style.display = "flex";
// selected.parentElement.nextElementSibling.style.display = "none";
// searchSoftwareFilters();
// searchCategoryFilters();
// searchRoutySupport();
// }
// });
// });

// sortDivDropdown.addEventListener("click", () => {
// filterSearchBarWrapper.forEach((selected) => {
// const searchBarStyleInfo = window.getComputedStyle(selected);
// if (searchBarStyleInfo.display !== "none") {
// selected.style.display = "none";
// const searchInput = selected.querySelector("input");
// searchInput.value = "";
// selected.previousElementSibling.style.display = "flex";
// selected.parentElement.nextElementSibling.style.display = "none";
// searchSoftwareFilters();
// searchCategoryFilters();
// searchRoutySupport();
// }
// });
// });

const searchImageMobile = document.getElementById(
  "affiliate-programs-table-search-image-mobile-id"
);

const searchInputMobileDiv = document.getElementById(
  "affiliate-programs-table-search-input-div-mobile-id"
);

// const searchInputMobile = searchInputMobileDiv.querySelector("input");

// searchImageMobile.addEventListener("click", () => {
// if (searchInputMobileDiv.classList.contains("active")) {
// searchInputMobileDiv.classList.remove("active");
// } else {
// searchInputMobileDiv.classList.add("active");
// }
// });

function filterHandler() {
  const searchValueDesktop = document
    .getElementById("affiliate-programs-table-search-input")
    .value.toLowerCase();
  const searchValueMobile = document
    .getElementById("affiliate-programs-table-search-input-mobile")
    .value.toLowerCase();
  const sortValue = document.querySelector(
    ".affiliate-programs-table-sort-selected-display"
  ).innerHTML;
  const searchValue = searchValueDesktop || searchValueMobile || "";
  const searchedPrograms = [...searchPrograms(programs, searchValue)];
  filteredPrograms = [...applyFilters(searchedPrograms)];
  const arrowImage = document.getElementById(
    "affiliate-program-arrow-image-id"
  );
  arrowImage.classList.remove("active");
  sortPrograms(sortValue);
}

function searchHandler() {
  const searchValueDesktop = document
    .getElementById("affiliate-programs-table-search-input")
    .value.toLowerCase();
  const searchValueMobile = document
    .getElementById("affiliate-programs-table-search-input-mobile")
    .value.toLowerCase();
  const sortValue = document.querySelector(
    ".affiliate-programs-table-sort-selected-display"
  ).innerHTML;
  const searchValue = searchValueDesktop || searchValueMobile || "";
  const filtered = [...applyFilters(programs)];
  filteredPrograms = [...searchPrograms(filtered, searchValue)];
  const arrowImage = document.getElementById(
    "affiliate-program-arrow-image-id"
  );
  arrowImage.classList.remove("active");
  sortPrograms(sortValue);
}

function tabEvent() {
  let tabs = document.querySelectorAll(
    "#affiliate-programs-list-details-tabs-headings div"
  );
  let tabContents = document.querySelectorAll(
    ".affiliate-programs-list-details-tab-content"
  );
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      for (item of tabs) {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      }
      e.target
        .closest(".affiliate-programs-list-details-tab-button")
        .classList.add("active");
      let tabId = e.target
        .closest(".affiliate-programs-list-details-tab-button")
        .getAttribute("data-tab");
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      document.getElementById(tabId).classList.add("active");
    });
  });
}
// let currentPage = 1;
// const itemsPerPage = 10;
// let appliedFiltersArray = [];
// let filteredPrograms = [];
// let appliedFilters = {};
// let appliedFiltersClassesArray = [];
// const identifiersUsed = {
//   addButtonWrapper: ".affiliate-programs-table-filter-add-category-wrapper",
//   affiliate-programs-table-id:"affiliate-programs-table-id"
// };
// const programs = [
//   {
//     id: 1,
//     name: "1CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 2,
//     name: "2Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "9 Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 3,
//     name: "3 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "10% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 4,
//     name: "4 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "50% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 5,
//     name: "5ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 6,
//     name: "6CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 7,
//     name: "7Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 8,
//     name: "8 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 9,
//     name: "9 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 10,
//     name: "10 ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 11,
//     name: "11CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 12,
//     name: "12Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//   },
//   {
//     id: 13,
//     name: "13 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 14,
//     name: "14 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 15,
//     name: "15ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 16,
//     name: "16CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 17,
//     name: "17Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 18,
//     name: "18 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 19,
//     name: "19 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 20,
//     name: "20 ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 21,
//     name: "21 CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 22,
//     name: "22 Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 23,
//     name: "23 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 24,
//     name: "24 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 25,
//     name: "25 ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 26,
//     name: "26 CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 27,
//     name: "27 Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 28,
//     name: "28 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 29,
//     name: "29 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 30,
//     name: "30 ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 31,
//     name: "31 CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 32,
//     name: "32 Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 33,
//     name: "33 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 34,
//     name: "34 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 35,
//     name: "35ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 36,
//     name: "36 CryptoBet Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/crypto-bet-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambling",
//     link: `#`,
//   },
//   {
//     id: 37,
//     name: "37 Bombastic Partners",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bombastic-partners-logo.svg",
//     software: "MyAffiliates",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/my-affiliates-logo.svg",
//     commission: "30-40% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Casino",
//     link: `#`,
//   },
//   {
//     id: 38,
//     name: "38 10bet Africa Partners",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10-bet-logo.svg",
//     software: "CompanyWithoutLogo",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/company-without-logo-logo.svg",
//     commission: "20% Revenue share",
//     routy: false,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Sportsbook",
//     link: `#`,
//   },
//   {
//     id: 39,
//     name: "39 10x10 Bet Affiliates",
//     imageUrl: "http://routy.app/wp-content/uploads/2024/07/10x10-logo.svg",
//     software: "BetConstruct",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/bet-construct-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Bingo",
//     link: ``,
//   },
//   {
//     id: 40,
//     name: "40 ReadyCasino Affiliates",
//     imageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/ready-casino-logo.svg",
//     software: "SwissSoft",
//     softwareImageUrl:
//       "http://routy.app/wp-content/uploads/2024/07/swisssoft-logo.svg",
//     commission: "30% Revenue share",
//     routy: true,
//     routyTickSrc: "http://routy.app/wp-content/uploads/2024/07/tick-logo.svg",
//     routyCrossSrc: "http://routy.app/wp-content/uploads/2024/07/cros-logo.svg",
//     category: "Gambl",
//     link: `#`,
//   },
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   filteredPrograms = [...programs];
//   if (window.location.href.includes("elementor-19985")) {
//     renderDetailsPageInfo();
//     tabEvent();
//   } else {
//     renderList();
//     renderPagination();
//     renderSoftwareFilters();
//     renderRoutySupportFilters();
//     renderCategoryFilters();
//     // const filterArrowImage = document.getElementById(
//     //   "affiliate-programs-table-filter-right-image-id"
//     // );
//     // const filterDivDropdown = document.querySelector(
//     //   ".affiliate-programs-table-filter-div-dropdown"
//     // );

//     // const filterSearchBarWrapper = document.querySelectorAll(
//     //   ".affiliate-programs-table-filter-search-bar-wrapper"
//     // );

//     // const sortDivDropdown = document.querySelector(
//     //   ".affiliate-programs-table-sort-div-dropdown"
//     // );

//     filterArrowImage.addEventListener("click", (e) => {
//       e.stopPropagation();
//       if (filterDivDropdown.classList.contains("active")) {
//         filterDivDropdown.classList.remove("active");
//       } else {
//         filterDivDropdown.classList.add("active");
//       }
//       if (sortDivDropdown.classList.contains("active")) {
//         sortDivDropdown.classList.remove("active");
//       }
//       filterSearchBarWrapper.forEach((selected) => {
//         const searchBarStyleInfo = window.getComputedStyle(selected);
//         if (searchBarStyleInfo.display !== "none") {
//           selected.style.display = "none";
//           const searchInput = selected.querySelector("input");
//           searchInput.value = "";
//           selected.previousElementSibling.style.display = "flex";
//           selected.parentElement.nextElementSibling.style.display = "none";
//           searchSoftwareFilters();
//           searchCategoryFilters();
//           searchRoutySupport();
//         }
//       });
//     });

//     sortDivDropdown.addEventListener("click", () => {
//       filterSearchBarWrapper.forEach((selected) => {
//         const searchBarStyleInfo = window.getComputedStyle(selected);
//         if (searchBarStyleInfo.display !== "none") {
//           selected.style.display = "none";
//           const searchInput = selected.querySelector("input");
//           searchInput.value = "";
//           selected.previousElementSibling.style.display = "flex";
//           selected.parentElement.nextElementSibling.style.display = "none";
//           searchSoftwareFilters();
//           searchCategoryFilters();
//           searchRoutySupport();
//         }
//       });
//     });

//     // const searchImageMobile = document.getElementById(
//     //   "affiliate-programs-table-search-image-mobile-id"
//     // );

//     // const searchInputMobileDiv = document.getElementById(
//     //   "affiliate-programs-table-search-input-div-mobile-id"
//     // );

//     // const searchInputMobile = searchInputMobileDiv.querySelector("input");

//     searchImageMobile.addEventListener("click", () => {
//       if (searchInputMobileDiv.classList.contains("active")) {
//         searchInputMobileDiv.classList.remove("active");
//       } else {
//         searchInputMobileDiv.classList.add("active");
//       }
//     });
//   }
// });

// function renderList() {
//   const list = document.getElementById("affiliate-programs-table-id");
//   list.innerHTML = "";
//   const displayedPrograms = filteredPrograms.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   if (displayedPrograms.length === 0) {
//     const item = document.createElement("div");
//     item.className = "affiliate-programs-table-no-records-found-row";
//     item.classList.add("affiliate-item-row");
//     item.innerHTML = `No Record Found`;
//     list.appendChild(item);
//   } else {
//     displayedPrograms.forEach((program) => {
//       const item = document.createElement("div");
//       item.className = "affiliate-item-row";
//       item.innerHTML = `
//             <a href="${`http://127.0.0.1/routy-local/elementor-19985/?id=${program.id}`}" class="table-data-contents-row-flex">
//                 <div class="affiliate-programs-table-column-1 affiliate-programs-table-body-column-1-styling affiliate-programs-columns-with-image"><img src="${
//                   program.imageUrl
//                 }" alt="affiliate program image" class="affiliate-program-logo-image"><div class="affiliate-programs-table-column-one-names-wrapper"><span class="affiliate-programs-table-column-one-program-name">${
//         program.name
//       }</span><span class="affiliate-programs-table-column-one-commissions">${
//         program.commission
//       }</span></div></div>
//   <img src="https://routy.app/wp-content/uploads/2024/07/arrow-right-black.svg" alt="right arrow image" class="affiliate-programs-table-column-one-right-arrow">
//                 <div class="affiliate-programs-table-column-2 affiliate-programs-table-body-column-2-styling affiliate-programs-columns-with-image"><img src="${
//                   program.softwareImageUrl
//                 }" alt="software image" class="software-logo-image"><div>${
//         program.software
//       }</div></div>
//                 <div class="affiliate-programs-table-column-3 affiliate-programs-table-body-column-3-styling">${
//                   program.commission
//                 }</div>
//                 <div class="affiliate-programs-table-column-4 affiliate-programs-table-body-column-4-styling">${
//                   program.routy
//                     ? `<img src="${program.routyTickSrc}" alt="blue tick image" class="routy-column-image-tick">`
//                     : `<img src='${program.routyCrossSrc}' alt="purple cross image" class="routy-column-image-cross">`
//                 }
//                 </div>
//                 <div class="affiliate-programs-table-column-5 affiliate-programs-table-body-column-5-styling">${
//                   program.category
//                 }</div>
//                 <div class="affiliate-programs-table-column-6 affiliate-programs-table-body-column-6-styling"><button class="affiliate-programs-table-column-6-join-button ${
//                   program.link ? "active" : "disable"
//                 }" data-link="${
//         program.link ? program.link : "#"
//       }">Join</button></div>
//             </a>
//         `;
//       list.appendChild(item);
//     });

//     const dataItemsAnchor = document.querySelectorAll(
//       ".table-data-contents-row-flex"
//     );
//     dataItemsAnchor.forEach((anchor) => {
//       anchor.addEventListener("click", (e) => {
//         if (
//           e.target.classList.contains(
//             "affiliate-programs-table-column-6-join-button"
//           )
//         ) {
//           e.preventDefault();
//         }
//       });
//     });

//     const joinButtonNodeList = document.querySelectorAll(
//       ".affiliate-programs-table-body .affiliate-programs-table-column-6-join-button"
//     );
//     joinButtonNodeList.forEach((selected) => {
//       selected.addEventListener("click", (e) => {
//         if (!e.target.classList.contains("active")) {
//           e.preventDefault();
//         } else {
//           window.location.href = e.target.getAttribute("data-link");
//         }
//       });
//     });
//   }
// }

// function renderPagination() {
//   const pagination = document.getElementById(
//     "affiliate-programs-table-pagination-id"
//   );
//   const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
//   pagination.innerHTML = "";

//   const createButton = (text, page) => {
//     const button = document.createElement("button");
//     if (text === "<" || text === ">") {
//       const img = document.createElement("img");
//       img.src =
//         text === "<"
//           ? "http://routy.app/wp-content/uploads/2024/07/pagination-left-arrow.svg"
//           : "http://routy.app/wp-content/uploads/2024/07/pagination-right-arrow.svg";
//       img.alt = text;
//       img.style.width = "20px";
//       img.style.height = "20px";
//       button.appendChild(img);
//     } else {
//       button.innerText = text;
//     }
//     if (page === currentPage) {
//       button.className =
//         "affiliate-program-table-pagination-page-number affiliate-program-table-pagination-button-active";
//     } else {
//       button.className = "affiliate-program-table-pagination-page-number";
//     }
//     button.addEventListener("click", () => goToPage(page));
//     return button;
//   };

//   pagination.appendChild(createButton("<", currentPage - 1));

//   if (totalPages <= 8) {
//     for (let i = 1; i <= totalPages; i++) {
//       pagination.appendChild(createButton(i, i));
//     }
//   } else {
//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = Math.min(totalPages, currentPage + 2);

//     if (currentPage <= 4) {
//       startPage = 1;
//       endPage = 5;
//     } else if (currentPage + 3 >= totalPages) {
//       startPage = totalPages - 4;
//       endPage = totalPages;
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pagination.appendChild(createButton(i, i));
//     }

//     if (currentPage + 3 < totalPages) {
//       const ellipsis = document.createElement("span");
//       ellipsis.innerText = "...";
//       pagination.appendChild(ellipsis);
//       pagination.appendChild(createButton(totalPages, totalPages));
//     }
//   }

//   pagination.appendChild(createButton(">", currentPage + 1));
// }

// function changePage(direction) {
//   currentPage += direction;
//   if (currentPage < 1) currentPage = 1;
//   if (currentPage > Math.ceil(filteredPrograms.length / itemsPerPage))
//     currentPage = Math.ceil(filteredPrograms.length / itemsPerPage);
//   renderList();
//   renderPagination();
// }

// function goToPage(page) {
//   if (page < 1) page = 1;
//   if (page > Math.ceil(filteredPrograms.length / itemsPerPage))
//     page = Math.ceil(filteredPrograms.length / itemsPerPage);
//   currentPage = page;
//   renderList();
//   renderPagination();
// }

// function renderDetailsPageInfo() {
//   const detailsPageUrl = window.location.href;
//   const urlObject = new URL(detailsPageUrl);
//   const params = new URLSearchParams(urlObject.search);
//   const paramId = params.get("id");
//   if (paramId) {
//     const objectVal = programs.find((o) => o.id === parseInt(paramId));
//     renderDetailsBannerandtab(objectVal);
//   }
// }

// function renderDetailsBannerandtab(obj) {
//   const bannerLogoImage = document.getElementById(
//     "affiliate-programs-list-details-banner-logo-image-id"
//   );
//   const bannerHeadingDiv = document.getElementById(
//     "affiliate-programs-list-details-banner-heading-id"
//   );
//   const bannerYearFoundedDiv = document.getElementById(
//     "affiliate-programs-list-details-year-founded-lower-div-id"
//   );
//   const bannerRevenueShareDiv = document.getElementById(
//     "affiliate-programs-list-details-revenue-info-lower-div-id"
//   );
//   const bannerSoftwareDiv = document.getElementById(
//     "affiliate-programs-list-details-software-info-lower-div"
//   );
//   const tabsDataName = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-name"
//   );
//   const tabsDataBrand = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-brand"
//   );
//   const tabsDataEmail = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-email"
//   );
//   const tabsDataTags = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-tags"
//   );
//   const tabsDataOwnership = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-ownership"
//   );
//   const tabsDataGameTypes = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-game-types"
//   );
//   const tabsDataLanguages = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-languages"
//   );
//   const tabsDataRequirements = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-requirements"
//   );
//   const tabsTermsAndConditions = document.getElementById(
//     "affiliate-programs-list-details-data-tabs-terms-and-conditions"
//   );
//   const tabsDataPhone = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-phone"
//   );
//   const tabsDataSkype = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-skype"
//   );
//   const tabsDataApprovalRate = document.getElementById(
//     "affiliate-programs-list-details-tabs-data-approval-rate"
//   );
//   bannerLogoImage.src = `${obj.imageUrl}`;
//   bannerHeadingDiv.innerHTML = obj.name;
//   bannerYearFoundedDiv.innerHTML = obj.year || "2023";
//   bannerRevenueShareDiv.innerHTML = obj.commission;
//   bannerSoftwareDiv.innerHTML = obj.software;
//   tabsDataName.innerHTML = obj.name || "Bombastic Partners";
//   tabsDataBrand.innerHTML = obj.brand || "Bombastic";
//   tabsDataEmail.innerHTML = obj.email || "affiliates@bombasticpartners.com";
//   tabsDataOwnership.innerHTML = obj.ownership || "Bombastic Partners Inc.";
//   tabsDataRequirements.innerHTML =
//     obj.requirements || "https://bombasticpartners.com/req";
//   tabsTermsAndConditions.innerHTML =
//     obj.termsAndConditions || "https://.bombasticpartners.com/terms";
//   tabsDataPhone.innerHTML = obj.phone || "+44 78 123457";
//   tabsDataSkype.innerHTML = obj.skype || "BombasticPartners";
//   tabsDataApprovalRate.innerHTML = obj.approvalRate || "19%";
// }

// function sortProgramsByName() {
//   const arrowImage = document.getElementById(
//     "affiliate-program-arrow-image-id"
//   );
//   let count = 0;
//   const arrowImageClasses = arrowImage.classList;
//   for (classname of arrowImageClasses) {
//     if (classname === "active") {
//       count++;
//     }
//   }
//   if (!count) {
//     arrowImage.classList.add("active");
//     filteredPrograms.sort((a, b) => {
//       return a.name.localeCompare(b.name);
//     });
//   } else {
//     arrowImage.classList.remove("active");
//     filteredPrograms.sort((a, b) => {
//       return b.name.localeCompare(a.name);
//     });
//   }
//   currentPage = 1;
//   renderList();
//   renderPagination();
// }

// function sortPrograms(sortValue) {
//   if (sortValue.toLowerCase() === "newest first") {
//     filteredPrograms.sort((a, b) => {
//       return b.id - a.id;
//     });
//   } else {
//     filteredPrograms.sort((a, b) => {
//       return a.id - b.id;
//     });
//   }
//   currentPage = 1;
//   renderList();
//   renderPagination();
// }

// function searchPrograms(currentArray, searchValue) {
//   const searchedPrograms = currentArray.filter(
//     (program) =>
//       program.name.toLowerCase().includes(searchValue) ||
//       program.software.toLowerCase().includes(searchValue) ||
//       program.commission.toLowerCase().includes(searchValue)
//   );
//   return searchedPrograms;
// }

// const selectedAll = document.querySelectorAll(".wrapper-dropdown");

// selectedAll.forEach((selected) => {
//   const optionsList = selected.querySelectorAll(
//     "div.wrapper-dropdown.affiliate-programs-table-sort-div-dropdown li"
//   );

//   selected.addEventListener("click", (e) => {
//     if (
//       selected.classList.contains("active") &&
//       e.target.closest(".affiliate-programs-table-filter-div-dropdown") === null
//     ) {
//       handleDropdown(selected, false);
//     } else {
//       let currentActive = document.querySelector(".wrapper-dropdown.active");
//       if (currentActive) {
//         if (
//           !(
//             currentActive.classList.contains(
//               "affiliate-programs-table-filter-div-dropdown"
//             ) &&
//             e.target.closest(
//               ".affiliate-programs-table-filter-div-dropdown"
//             ) !== null
//           )
//         ) {
//           handleDropdown(currentActive, false);
//         }
//       }
//       handleDropdown(selected, true);
//     }
//   });

//   for (let o of optionsList) {
//     o.addEventListener("click", () => {
//       selected.querySelector(
//         ".affiliate-programs-table-sort-selected-display"
//       ).innerHTML = o.innerHTML;
//       sortPrograms(o.innerHTML);
//     });
//   }
// });

// window.addEventListener("click", function (e) {
//   const filterSearchBarWrapper = document.querySelectorAll(
//     ".affiliate-programs-table-filter-search-bar-wrapper"
//   );
//   if (e.target.closest(".wrapper-dropdown") === null) {
//     closeAllDropdowns();
//     filterSearchBarWrapper.forEach((selected) => {
//       const searchBarStyleInfo = window.getComputedStyle(selected);
//       if (searchBarStyleInfo.display !== "none") {
//         selected.style.display = "none";
//         const searchInput = selected.querySelector("input");
//         searchInput.value = "";
//         selected.previousElementSibling.style.display = "flex";
//         selected.parentElement.nextElementSibling.style.display = "none";
//         searchSoftwareFilters();
//         searchCategoryFilters();
//         searchRoutySupport();
//       }
//     });
//   }
// });

// function closeAllDropdowns() {
//   const selectedAll = document.querySelectorAll(".wrapper-dropdown");
//   selectedAll.forEach((selected) => {
//     handleDropdown(selected, false);
//   });
// }

// function handleDropdown(dropdown, open) {
//   if (open) {
//     dropdown.classList.add("active");
//   } else {
//     dropdown.classList.remove("active");
//   }
// }

// const selectedAddFilter = document.querySelectorAll(
//   identifiersUsed.addButtonWrapper
// );

// selectedAddFilter.forEach((selected) => {
//   selected.addEventListener("click", function (e) {
//     e.target.closest(identifiersUsed.addButtonWrapper).style.display = "none";
//     e.target
//       .closest(".affiliate-programs-table-filter-categories-li")
//       .querySelector(
//         ".affiliate-programs-table-filter-search-bar-wrapper"
//       ).style.display = "flex";
//     e.target.querySelector(
//       ".affiliate-programs-table-filter-search-bar-wrapper"
//     );
//     e.target.closest(
//       ".affiliate-programs-table-filter-categories-li"
//     ).nextElementSibling.style.display = "flex";
//   });
// });

// const selectedFilterSearchCross = document.querySelectorAll(
//   ".affiliate-programs-table-filter-search-cross-image"
// );
// selectedFilterSearchCross.forEach((selected) => {
//   selected.addEventListener("click", function (e) {
//     e.target
//       .closest(".affiliate-programs-table-filter-categories-li")
//       .querySelector(
//         ".affiliate-programs-table-filter-search-bar-wrapper"
//       ).style.display = "none";
//     e.target
//       .closest(".affiliate-programs-table-filter-categories-li")
//       .querySelector(identifiersUsed.addButtonWrapper).style.display = "flex";
//     e.target.closest(
//       ".affiliate-programs-table-filter-categories-li"
//     ).nextElementSibling.style.display = "none";
//     e.target
//       .closest(".affiliate-programs-table-filter-categories-li")
//       .querySelector(
//         ".affiliate-programs-table-filter-search-bar-wrapper input"
//       ).value = "";
//     searchSoftwareFilters();
//     searchCategoryFilters();
//     searchRoutySupport();
//   });
// });

// let softwareFilters = [...new Set(programs.map((item) => item.software))];

// const softwareFiltersDiv = document.getElementById(
//   "affiliate-programs-table-software-filters-container-id"
// );

// function renderSoftwareFilters() {
//   softwareFiltersDiv.innerHTML = "";
//   if (softwareFilters.length === 0) {
//     const softwareDiv = document.createElement("div");
//     softwareDiv.classList.add(
//       "affiliate-programs-table-filters-search-no-record"
//     );
//     softwareDiv.innerHTML = "No Item Found";
//     softwareFiltersDiv.appendChild(softwareDiv);
//   } else {
//     softwareFilters.forEach((item) => {
//       const softwareDiv = document.createElement("div");
//       softwareDiv.innerHTML = item;
//       softwareDiv.addEventListener("click", (e) => {
//         renderUtilityFunction(
//           e,
//           ".affiliate-programs-table-software-filters-items-wrapper",
//           "affiliate-programs-table-selected-software",
//           "software"
//         );
//       });
//       softwareFiltersDiv.appendChild(softwareDiv);
//     });
//   }
// }

// // renderSoftwareFilters();

// function renderUtilityFunction(e, wrapperClassName, typeClass, type) {
//   appliedFiltersArray.push(e.target.innerHTML);
//   appliedFiltersClassesArray.push(typeClass);
//   appliedFilters = { ...appliedFilters, [type]: e.target.innerHTML };
//   renderSelectedFilters();
//   filterHandler();
//   e.target.closest(wrapperClassName).style.display = "none";
//   e.target
//     .closest(wrapperClassName)
//     .previousElementSibling.querySelector(
//       ".affiliate-programs-table-filter-search-bar-wrapper"
//     ).style.display = "none";
//   e.target
//     .closest(wrapperClassName)
//     .previousElementSibling.querySelector(
//       ".affiliate-programs-table-selected-filter"
//     ).style.display = "flex";
//   e.target
//     .closest(wrapperClassName)
//     .previousElementSibling.querySelector(
//       ".affiliate-programs-table-selected-filter"
//     )
//     .classList.add(typeClass);
//   e.target
//     .closest(wrapperClassName)
//     .previousElementSibling.querySelector(
//       ".affiliate-programs-table-selected-filter"
//     ).innerHTML = `<div>${e.target.innerHTML}</div> <img src="http://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image">`;
//   e.target
//     .closest(wrapperClassName)
//     .previousElementSibling.querySelector(
//       ".affiliate-programs-table-selected-filter .affiliate-program-table-filter-category-cross-image"
//     )
//     .addEventListener("click", function (e) {
//       let updatedAppliedFiltersArray = appliedFiltersArray.filter((item) => {
//         if (
//           e.target.closest(".affiliate-programs-table-selected-filter")
//             .children[0].innerHTML
//         ) {
//           return !(
//             item ==
//             e.target.closest(".affiliate-programs-table-selected-filter")
//               .children[0].innerHTML
//           );
//         }
//       });
//       appliedFiltersArray = [...updatedAppliedFiltersArray];
//       let updatedAppliedFiltersClassesArray = appliedFiltersClassesArray.filter(
//         (item) => item !== typeClass
//       );
//       appliedFiltersClassesArray = [...updatedAppliedFiltersClassesArray];
//       delete appliedFilters[type];
//       renderSelectedFilters();
//       filterHandler();
//       e.target.closest(
//         ".affiliate-programs-table-selected-filter"
//       ).style.display = "none";
//       e.target
//         .closest(".affiliate-programs-table-filter-categories-li")
//         .querySelector(identifiersUsed.addButtonWrapper).style.display = "flex";
//     });
// }

// const routySupportFiltersPrimary = ["Yes", "No"];
// const routySupportFiltersDiv = document.getElementById(
//   "affiliate-programs-table-routy-support-filters-container-id"
// );

// let routySupportFiltersSecondary = [...routySupportFiltersPrimary];

// function renderRoutySupportFilters() {
//   routySupportFiltersDiv.innerHTML = "";
//   if (routySupportFiltersSecondary.length === 0) {
//     const routySupportDiv = document.createElement("div");
//     routySupportDiv.classList.add(
//       "affiliate-programs-table-filters-search-no-record"
//     );
//     routySupportDiv.innerHTML = "No Item Found";
//     routySupportFiltersDiv.appendChild(routySupportDiv);
//   } else {
//     routySupportFiltersSecondary.forEach((item) => {
//       const routySupportDiv = document.createElement("div");
//       routySupportDiv.classList.add(
//         "affiliate-programs-table-routy-support-filter-select-choice-button"
//       );
//       routySupportDiv.innerHTML = item;
//       routySupportDiv.addEventListener("click", (e) => {
//         appliedFiltersArray.push(e.target.innerHTML);
//         appliedFiltersClassesArray.push(
//           "affiliate-programs-table-selected-routy-support"
//         );
//         renderSelectedFilters();
//         appliedFilters = {
//           ...appliedFilters,
//           routySupport:
//             e.target.innerHTML.toLowerCase() === "yes" ? true : false,
//         };
//         filterHandler();
//         e.target.closest(
//           ".affiliate-programs-table-routy-support-filters-items-wrapper"
//         ).style.display = "none";
//         e.target
//           .closest(
//             ".affiliate-programs-table-routy-support-filters-items-wrapper"
//           )
//           .previousElementSibling.querySelector(
//             ".affiliate-programs-table-filter-search-bar-wrapper"
//           ).style.display = "none";
//         e.target
//           .closest(
//             ".affiliate-programs-table-routy-support-filters-items-wrapper"
//           )
//           .previousElementSibling.querySelector(
//             ".affiliate-programs-table-selected-filter"
//           ).style.display = "flex";
//         e.target
//           .closest(
//             ".affiliate-programs-table-routy-support-filters-items-wrapper"
//           )
//           .previousElementSibling.querySelector(
//             ".affiliate-programs-table-selected-filter"
//           )
//           .classList.add("affiliate-programs-table-selected-routy-support");
//         e.target
//           .closest(
//             ".affiliate-programs-table-routy-support-filters-items-wrapper"
//           )
//           .previousElementSibling.querySelector(
//             ".affiliate-programs-table-selected-filter"
//           ).innerHTML = `<div>${e.target.innerHTML}</div> <img src="http://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image">`;
//         e.target
//           .closest(
//             ".affiliate-programs-table-routy-support-filters-items-wrapper"
//           )
//           .previousElementSibling.querySelector(
//             ".affiliate-programs-table-selected-filter .affiliate-program-table-filter-category-cross-image"
//           )
//           .addEventListener("click", function (e) {
//             let updatedAppliedFiltersArray = appliedFiltersArray.filter(
//               (item) => {
//                 if (
//                   e.target.closest(".affiliate-programs-table-selected-filter")
//                     .children[0].innerHTML
//                 ) {
//                   return !(
//                     item ==
//                     e.target.closest(
//                       ".affiliate-programs-table-selected-filter"
//                     ).children[0].innerHTML
//                   );
//                 }
//               }
//             );
//             appliedFiltersArray = [...updatedAppliedFiltersArray];
//             let updatedAppliedFiltersClassesArray =
//               appliedFiltersClassesArray.filter(
//                 (item) =>
//                   item !== "affiliate-programs-table-selected-routy-support"
//               );
//             appliedFiltersClassesArray = [...updatedAppliedFiltersClassesArray];
//             renderSelectedFilters();
//             delete appliedFilters["routySupport"];
//             filterHandler();
//             e.target.closest(
//               ".affiliate-programs-table-selected-filter"
//             ).style.display = "none";
//             e.target
//               .closest(".affiliate-programs-table-filter-categories-li")
//               .querySelector(identifiersUsed.addButtonWrapper).style.display =
//               "flex";
//           });
//       });
//       routySupportFiltersDiv.appendChild(routySupportDiv);
//     });
//   }
// }

// // renderRoutySupportFilters();

// let categoryFilters = [...new Set(programs.map((item) => item.category))];

// const categoryFiltersDiv = document.getElementById(
//   "affiliate-programs-table-category-filters-container-id"
// );

// function renderCategoryFilters() {
//   categoryFiltersDiv.innerHTML = "";
//   if (categoryFilters.length === 0) {
//     const categoryDiv = document.createElement("div");
//     categoryDiv.classList.add(
//       "affiliate-programs-table-filters-search-no-record"
//     );
//     categoryDiv.innerHTML = "No Item Found";
//     categoryFiltersDiv.appendChild(categoryDiv);
//   } else {
//     categoryFilters.forEach((item) => {
//       const categoryDiv = document.createElement("div");
//       categoryDiv.innerHTML = item;
//       categoryDiv.addEventListener("click", (e) => {
//         renderUtilityFunction(
//           e,
//           ".affiliate-programs-table-category-filters-items-wrapper",
//           "affiliate-programs-table-selected-category",
//           "category"
//         );
//       });
//       categoryFiltersDiv.appendChild(categoryDiv);
//     });
//   }
// }

// // renderCategoryFilters();

// function searchSoftwareFilters() {
//   const softwareSearchInput = document
//     .getElementById("search-software-filter-id")
//     .value.toLowerCase();
//   let searchFilteredSoftwares = programs.filter((item) =>
//     item.software.toLowerCase().includes(softwareSearchInput)
//   );
//   softwareFilters = [
//     ...new Set(searchFilteredSoftwares.map((item) => item.software)),
//   ];
//   renderSoftwareFilters();
// }

// function searchCategoryFilters() {
//   const categorySearchInput = document
//     .getElementById("category-search-input-filter-id")
//     .value.toLowerCase();
//   let searchFilteredCategories = programs.filter((item) =>
//     item.category.toLowerCase().includes(categorySearchInput)
//   );
//   categoryFilters = [
//     ...new Set(searchFilteredCategories.map((item) => item.category)),
//   ];
//   renderCategoryFilters();
// }

// function searchRoutySupport() {
//   const routySupportSearchInput = document
//     .getElementById("routy-support-search-input-filter-id")
//     .value.toLowerCase();
//   routySupportFiltersSecondary = routySupportFiltersPrimary.filter((item) =>
//     item.toLowerCase().includes(routySupportSearchInput)
//   );
//   renderRoutySupportFilters();
// }

// function renderSwitchCase(e) {
//   switch (e.target.id) {
//     case "affiliate-programs-table-selected-software":
//       delete appliedFilters["software"];
//       filterHandler();
//       break;
//     case "affiliate-programs-table-selected-routy-support":
//       delete appliedFilters["routySupport"];
//       filterHandler();
//       break;
//     case "affiliate-programs-table-selected-category":
//       delete appliedFilters["category"];
//       filterHandler();
//       break;
//     default:
//   }
// }

// function renderSelectedFiltersUtility(e) {
//   e.stopPropagation();
//   let updatedAppliedFiltersArray = appliedFiltersArray.filter((item) => {
//     if (
//       e.target.closest(".affiliate-program-table-filter-categories").children[0]
//         .innerHTML
//     ) {
//       return !(
//         item ==
//         e.target.closest(".affiliate-program-table-filter-categories")
//           .children[0].innerHTML
//       );
//     }
//   });
//   appliedFiltersArray = [...updatedAppliedFiltersArray];
//   let updatedAppliedFiltersClassesArray = appliedFiltersClassesArray.filter(
//     (item) => item !== e.target.id
//   );
//   appliedFiltersClassesArray = [...updatedAppliedFiltersClassesArray];
//   const selectedFiltersLi = filterDivDropdown.querySelectorAll(
//     ".affiliate-programs-table-selected-filter"
//   );
//   selectedFiltersLi.forEach((selected) => {
//     if (selected.classList.contains(e.target.id)) {
//       selected.style.display = "none";
//       selected
//         .closest(".affiliate-programs-table-filter-categories-li")
//         .querySelector(identifiersUsed.addButtonWrapper).style.display = "flex";
//     }
//   });
// }

// function renderSelectedFilters() {
//   const filterMiddleDiv = document.getElementById(
//     "affiliate-programs-table-filter-middle-div-id"
//   );
//   const selectedFiltersDisplayDiv = document.getElementById(
//     "affiliate-programs-table-selected-filters-display-div-id"
//   );
//   if (appliedFiltersArray.length >= 1 && appliedFiltersArray.length <= 3) {
//     filterMiddleDiv.innerHTML = "";
//     selectedFiltersDisplayDiv.classList.add("active");
//     selectedFiltersDisplayDiv.innerHTML = "";
//     filterMiddleDiv.innerHTML = `<div class="affiliate-program-table-filter-categories"><div>${appliedFiltersArray[0]}</div><img src="http://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[0]}" ></div>`;
//     filterMiddleDiv
//       .querySelector(".affiliate-program-table-filter-category-cross-image")
//       .addEventListener("click", (e) => {
//         renderSelectedFiltersUtility(e);
//         renderSwitchCase(e);
//         renderSelectedFilters();
//       });
//     for (let i = 1; i < appliedFiltersArray.length; i++) {
//       const selectedFilterItem = document.createElement("div");
//       selectedFilterItem.classList.add(
//         "affiliate-program-table-filter-categories"
//       );
//       selectedFilterItem.innerHTML = `<div>${appliedFiltersArray[i]}</div><img src="http://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[i]}">`;
//       selectedFiltersDisplayDiv.appendChild(selectedFilterItem);
//     }
//     if (appliedFiltersArray.length == 1) {
//       selectedFiltersDisplayDiv.innerHTML = "";
//       selectedFiltersDisplayDiv.classList.remove("active");
//     }
//     const filterSelectedFiltersRowCrossImages =
//       selectedFiltersDisplayDiv.querySelectorAll(
//         ".affiliate-program-table-filter-category-cross-image"
//       );
//     filterSelectedFiltersRowCrossImages.forEach((crossImage) => {
//       crossImage.addEventListener("click", (e) => {
//         renderSelectedFiltersUtility(e);
//         renderSwitchCase(e);
//         renderSelectedFilters();
//       });
//     });
//   } else if (appliedFiltersArray.length > 3) {
//     filterMiddleDiv.innerHTML = "";
//     selectedFiltersDisplayDiv.classList.add("active");
//     selectedFiltersDisplayDiv.innerHTML = "";
//     filterMiddleDiv.innerHTML = `<div class="affiliate-program-table-filter-categories"><div>${appliedFiltersArray[0]}</div><img src="http://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[0]}"></div>`;
//     filterMiddleDiv
//       .querySelector(".affiliate-program-table-filter-category-cross-image")
//       .addEventListener("click", (e) => {
//         renderSelectedFiltersUtility(e);
//         renderSwitchCase(e);
//         renderSelectedFilters();
//       });
//     const selectedFilterItemLeft = document.createElement("div");
//     selectedFilterItemLeft.classList.add(
//       "affiliate-program-table-filter-categories"
//     );
//     selectedFilterItemLeft.innerHTML = `<div>${appliedFiltersArray[1]}</div><img src="http://routy.app/wp-content/uploads/2024/07/cross-icon-filter.svg" alt="cross image" class="affiliate-program-table-filter-category-cross-image" id="${appliedFiltersClassesArray[1]}">`;
//     selectedFiltersDisplayDiv.appendChild(selectedFilterItemLeft);
//     const selectedFilterItemMiddle = document.createElement("div");
//     selectedFilterItemMiddle.classList.add(
//       "affiliate-program-table-filter-categories"
//     );
//     const filterSelectedFiltersRowCrossImages =
//       selectedFiltersDisplayDiv.querySelectorAll(
//         ".affiliate-program-table-filter-category-cross-image"
//       );
//     filterSelectedFiltersRowCrossImages.forEach((crossImage) => {
//       crossImage.addEventListener("click", (e) => {
//         renderSelectedFiltersUtility(e);
//         renderSwitchCase(e);
//         renderSelectedFilters();
//       });
//     });
//     selectedFilterItemMiddle.innerHTML = `<div>+2 others</div>`;
//     selectedFiltersDisplayDiv.appendChild(selectedFilterItemMiddle);
//   } else {
//     filterMiddleDiv.innerHTML = "";
//     selectedFiltersDisplayDiv.innerHTML = "";
//     selectedFiltersDisplayDiv.classList.remove("active");
//   }
// }

// function applyFilters(currentArray) {
//   const filteredItems = currentArray.filter((program) => {
//     for (let filterCategory in appliedFilters) {
//       if (
//         filterCategory === "software" &&
//         program.software !== appliedFilters[filterCategory]
//       ) {
//         return false;
//       }
//       if (
//         filterCategory === "routySupport" &&
//         program.routy !== appliedFilters[filterCategory]
//       ) {
//         return false;
//       }
//       if (
//         filterCategory === "category" &&
//         program.category !== appliedFilters[filterCategory]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
//   return filteredItems;
// }

// const filterArrowImage = document.getElementById(
//   "affiliate-programs-table-filter-right-image-id"
// );
// const filterDivDropdown = document.querySelector(
//   ".affiliate-programs-table-filter-div-dropdown"
// );

// const filterSearchBarWrapper = document.querySelectorAll(
//   ".affiliate-programs-table-filter-search-bar-wrapper"
// );

// const sortDivDropdown = document.querySelector(
//   ".affiliate-programs-table-sort-div-dropdown"
// );

// // filterArrowImage.addEventListener("click", (e) => {
// //   e.stopPropagation();
// //   if (filterDivDropdown.classList.contains("active")) {
// //     filterDivDropdown.classList.remove("active");
// //   } else {
// //     filterDivDropdown.classList.add("active");
// //   }
// //   if (sortDivDropdown.classList.contains("active")) {
// //     sortDivDropdown.classList.remove("active");
// //   }
// //   filterSearchBarWrapper.forEach((selected) => {
// //     const searchBarStyleInfo = window.getComputedStyle(selected);
// //     if (searchBarStyleInfo.display !== "none") {
// //       selected.style.display = "none";
// //       const searchInput = selected.querySelector("input");
// //       searchInput.value = "";
// //       selected.previousElementSibling.style.display = "flex";
// //       selected.parentElement.nextElementSibling.style.display = "none";
// //       searchSoftwareFilters();
// //       searchCategoryFilters();
// //       searchRoutySupport();
// //     }
// //   });
// // });

// // sortDivDropdown.addEventListener("click", () => {
// //   filterSearchBarWrapper.forEach((selected) => {
// //     const searchBarStyleInfo = window.getComputedStyle(selected);
// //     if (searchBarStyleInfo.display !== "none") {
// //       selected.style.display = "none";
// //       const searchInput = selected.querySelector("input");
// //       searchInput.value = "";
// //       selected.previousElementSibling.style.display = "flex";
// //       selected.parentElement.nextElementSibling.style.display = "none";
// //       searchSoftwareFilters();
// //       searchCategoryFilters();
// //       searchRoutySupport();
// //     }
// //   });
// // });

// const searchImageMobile = document.getElementById(
//   "affiliate-programs-table-search-image-mobile-id"
// );

// const searchInputMobileDiv = document.getElementById(
//   "affiliate-programs-table-search-input-div-mobile-id"
// );

// // const searchInputMobile = searchInputMobileDiv.querySelector("input");

// // searchImageMobile.addEventListener("click", () => {
// //   if (searchInputMobileDiv.classList.contains("active")) {
// //     searchInputMobileDiv.classList.remove("active");
// //   } else {
// //     searchInputMobileDiv.classList.add("active");
// //   }
// // });

// function filterHandler() {
//   const searchValueDesktop = document
//     .getElementById("affiliate-programs-table-search-input")
//     .value.toLowerCase();
//   const searchValueMobile = document
//     .getElementById("affiliate-programs-table-search-input-mobile")
//     .value.toLowerCase();
//   const sortValue = document.querySelector(
//     ".affiliate-programs-table-sort-selected-display"
//   ).innerHTML;
//   const searchValue = searchValueDesktop || searchValueMobile || "";
//   const searchedPrograms = [...searchPrograms(programs, searchValue)];
//   filteredPrograms = [...applyFilters(searchedPrograms)];
//   const arrowImage = document.getElementById(
//     "affiliate-program-arrow-image-id"
//   );
//   arrowImage.classList.remove("active");
//   sortPrograms(sortValue);
// }

// function searchHandler() {
//   const searchValueDesktop = document
//     .getElementById("affiliate-programs-table-search-input")
//     .value.toLowerCase();
//   const searchValueMobile = document
//     .getElementById("affiliate-programs-table-search-input-mobile")
//     .value.toLowerCase();
//   const sortValue = document.querySelector(
//     ".affiliate-programs-table-sort-selected-display"
//   ).innerHTML;
//   const searchValue = searchValueDesktop || searchValueMobile || "";
//   const filtered = [...applyFilters(programs)];
//   filteredPrograms = [...searchPrograms(filtered, searchValue)];
//   const arrowImage = document.getElementById(
//     "affiliate-program-arrow-image-id"
//   );
//   arrowImage.classList.remove("active");
//   sortPrograms(sortValue);
// }

// function tabEvent() {
//   let tabs = document.querySelectorAll(
//     "#affiliate-programs-list-details-tabs-headings div"
//   );
//   let tabContents = document.querySelectorAll(
//     ".affiliate-programs-list-details-tab-content"
//   );
//   tabs.forEach((tab) => {
//     tab.addEventListener("click", (e) => {
//       for (item of tabs) {
//         if (item.classList.contains("active")) {
//           item.classList.remove("active");
//         }
//       }
//       e.target
//         .closest(".affiliate-programs-list-details-tab-button")
//         .classList.add("active");
//       let tabId = e.target
//         .closest(".affiliate-programs-list-details-tab-button")
//         .getAttribute("data-tab");
//       tabContents.forEach((content) => {
//         content.classList.remove("active");
//       });
//       document.getElementById(tabId).classList.add("active");
//     });
//   });
// }
