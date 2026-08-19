/* ==========================================================================
   Dunston Business Village — tenant directory data
   --------------------------------------------------------------------------
   Source: DBV's own live business locator (search.dunstonbusinessvillage.com),
   captured 19 August 2026. Names, building locations and door numbers are
   reproduced as DBV publishes them.

   NOTES — read before publishing:
   - `contact` and `tel` are the named contact and direct-dial number each
     tenant has listed on DBV's own locator. They are reproduced here at the
     client's request. Because this puts named individuals and direct lines on
     a public marketing page, DBV should confirm tenants are happy with it
     before launch. To pull them back out, delete the `contact`/`tel`/`ext`
     keys — directory.js renders them only when present, so nothing breaks.
   - Entries marked `reception: true` are listed at the reception address
     (Woodland Lodge, Log Cabin 20, Door 64). That is DBV's registered/virtual
     office address, so these are most likely virtual-office and registered-
     address clients rather than businesses physically occupying space.
     DBV should confirm before they are presented as on-site occupiers.
   - `cat` values are editorial groupings derived from each entry's own
     keywords. They are not DBV's taxonomy. Confirm with DBV.

   Facilities entries (reception, meeting rooms, parking) are held in the
   locator but are excluded here — they belong on the facilities page.
   ========================================================================== */

window.DBV_BUSINESSES = [
  { name: "2 Plan Wealth Management / KS Wealth (IFA) Ltd / KS Estate Planning / Protrust CFP Ltd", cat: "Finance & Wealth", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Kris Sleeuwenhoek", tel: "01785450080" },
  { name: "ADV Services", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "PING ZHANG", tel: "07376420001" },
  { name: "Amanda Dixon – Photography", cat: "Creative & Media", loc: "Barn 2A", door: "", kw: "Portrait studio, fine art photography", tel: "07985354393" },
  { name: "Andersen Caledonia", cat: "Environmental & Energy", loc: "Barn 7, Office B, Ground Floor", door: "North Entrance", kw: "Infection prevention, contamination control, NHS decontamination services, anti-viral surface cleaning", contact: "Ronan Stapleton", tel: "01785 711588" },
  { name: "Aqwise Ltd / Bluegen", cat: "Environmental & Energy", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Tim Cunliffe", tel: "07970 595902" },
  { name: "ATG Airports", cat: "Engineering & Manufacturing", loc: "Lodge 13A", door: "49", contact: "Phil McGuinness", tel: "07899960806", ext: "1114" },
  { name: "Automation Academy Ltd", cat: "Recruitment & Training", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Richard Turner", tel: "07886 725085" },
  { name: "Barbara Adams T/A The Beauty Hut", cat: "Beauty & Aesthetics", loc: "Barn 3 North, Office 3", door: "23", kw: "Manicure, pedicure, LVL, waxing, brow lamination, spray tanning, micro-blading, aesthetic treatments, hydro facials, laser hair removal", contact: "Barbara Adams", tel: "07919156334" },
  { name: "Be Media Group (Stark Wayne / Thinking Ape)", cat: "Creative & Media", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Simon Belcher", tel: "01543 547575" },
  { name: "Bespoke Telephony Solutions Ltd", cat: "Technology", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Adrian Maclaughlin", tel: "0800 021 0600", web: "bespoketelephonysolutions.com" },
  { name: "Bimson Haulage Ltd", cat: "Logistics & Motoring", loc: "Log Cabin 12A", door: "47", kw: "Heavy haulage, urban brick crane, artic Moffett, artic curtainsider, artic flatbed, rigid flatbed, trucks, deliveries", contact: "Dan Richards", tel: "01785 333900", web: "bimson.co.uk" },
  { name: "Brand Jam", cat: "Creative & Media", loc: "Lodge 17D", door: "57, 59 and 73", contact: "Chris Robinson", tel: "01543 547 587", ext: "1171" },
  { name: "British Grassland Society", cat: "Professional Services", loc: "Lodge 13B", door: "50", contact: "Thomas Goatman", tel: "01270 616464", ext: "1115" },
  { name: "By Jade Alia Ltd", cat: "Beauty & Aesthetics", loc: "Log Cabin 11B", door: "46", kw: "Nails, manicures, beauty treatments", contact: "Jade Clemson", tel: "07555275114" },
  { name: "Cast Metal Federation", cat: "Engineering & Manufacturing", loc: "Barn 7, Offices C4–C6, 1st Floor", door: "Ground Floor", kw: "Trade federation, business development, training", tel: "+44 (0)121 809 3500", web: "castmetalsfederation.com" },
  { name: "Castle Comforts", cat: "Health & Wellbeing", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Castle Comforts", tel: "01782612771" },
  { name: "CENSolutions Ltd", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Heather Wright", tel: "01785 716625" },
  { name: "Charity Aid Services", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Bev", tel: "07746417172" },
  { name: "Charterhouse Financial Planning Ltd", cat: "Finance & Wealth", loc: "Merlin Moor, Log Cabin 2B", door: "28", kw: "Financial planning", contact: "Lisa Luck", tel: "01902 904600" },
  { name: "Cinis Management Ltd", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Ivan Skidmore", tel: "07749 471813" },
  { name: "Clinics UK Ltd", cat: "Health & Wellbeing", loc: "Barn 3 West, Office 1C", door: "11", kw: "Skin care, health care", contact: "Stuart Logan", tel: "0121 439 4350" },
  { name: "CLR Group Limited / Kings Group", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Carl Roberts", tel: "0800 169 0068" },
  { name: "COLDRUSH Energy", cat: "Environmental & Energy", loc: "Log Cabin 16C", door: "56, 57 and 73", kw: "Domestic energy advice, net zero carbon, air tightness testing, environmental services, residential EPC/EPR", tel: "07818 505 668", web: "coldrush.energy" },
  { name: "Control Bridge Group", cat: "Technology", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Naveena Arjunan" },
  { name: "Daidala Properties Ltd", cat: "Property & Construction", loc: "Barn 7, Office B, Ground Floor", door: "North Entrance", contact: "Ronan Stapleton", tel: "01785 711588", ext: "1172" },
  { name: "Diesel Emission Control", cat: "Environmental & Energy", loc: "Barn 3, Office 9", door: "20", contact: "Jim Maloney", tel: "07718782937", ext: "4420" },
  { name: "Direct Assurance Training", cat: "Recruitment & Training", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "David Turner", tel: "01889802298" },
  { name: "Dr Natalie Byrne Clinical Psychology", cat: "Health & Wellbeing", loc: "Barn 7, Ground Floor, Office B5", door: "Barn 7 North", kw: "EMDR, CBT, DBT, CFT, ACT, mindfulness, eye movement desensitization, cognitive behavioural therapy, dialectical behavioural therapy, compassion focussed therapy", contact: "Natalie Byrne", tel: "07870195222", web: "drnataliebyrneclinicalpsychology.com" },
  { name: "Drywall Contracts", cat: "Property & Construction", loc: "Barn 3 North, Offices 6, 7 & 10", door: "20", contact: "Symon James", tel: "01785450245", ext: "1150" },
  { name: "Dugmore Electrical", cat: "Property & Construction", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Stephen Dugmore", tel: "07903 872377" },
  { name: "Durable Installations Ltd", cat: "Property & Construction", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Edgaras Baranovskis", tel: "07710245983" },
  { name: "Elements4 Ltd", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Steve Raybould" },
  { name: "EMS Chemie", cat: "Engineering & Manufacturing", loc: "Log Cabin 1 & 2A", door: "25, 26, 27", contact: "Jane Hemmings", tel: "01785 283 739", ext: "1176" },
  { name: "Family Care Fostering Ltd", cat: "Health & Wellbeing", loc: "Barn 3 East, Offices 5A & 5B", door: "11", contact: "David Barrow", tel: "07341569413", ext: "1179" },
  { name: "Fine And Country Ltd (Midlands)", cat: "Property & Construction", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Sean Newman", tel: "07597299705" },
  { name: "First Choice", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Billy Goddard", tel: "07768715193" },
  { name: "Fraser Surgical Limited", cat: "Health & Wellbeing", loc: "Barn 7, Office B, Ground Floor", door: "North Entrance", contact: "Ronan Stapleton", tel: "01785 711588", ext: "1172" },
  { name: "Fusion People Ltd", cat: "Recruitment & Training", loc: "Barn 8, 1st Floor, Office 5", door: "17", tel: "07971978382" },
  { name: "Goss Films", cat: "Creative & Media", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Brendan Goss", tel: "07854935291" },
  { name: "Half Penny Fabrics", cat: "Retail & Trade", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Michelle Trueman", tel: "07973 953351" },
  { name: "Head Case Media", cat: "Creative & Media", loc: "Log Cabin 10B", door: "44", kw: "Media agency, video production, animation, branding, social media", contact: "Mr. Joseph Wheyway", tel: "07759571059", web: "headcasemedia.co.uk" },
  { name: "Hunter Selection Ltd", cat: "Recruitment & Training", loc: "Cabin 18B, Owls Hoot", door: "61, 62, 63", contact: "James Clarke", tel: "01785 450175", ext: "1106" },
  { name: "Infill Energy Ltd", cat: "Environmental & Energy", loc: "Barn 4D, Office 4", door: "15", tel: "0784 164 7037" },
  { name: "IQVia Technology Services Ltd", cat: "Technology", loc: "Log Cabin 9", door: "41 & 42", contact: "Mike Griffiths", tel: "07841 689705", ext: "1206" },
  { name: "JHM Consultancy Ltd", cat: "Finance & Wealth", loc: "Log Cabin 11A", door: "", kw: "Specialist bridging loans, auction finance, development funding and deal sourcing for property investors", tel: "07734 935297" },
  { name: "Jobsons Solicitors Ltd", cat: "Professional Services", loc: "Barn 3", door: "22", contact: "Simon Jobson", tel: "01785 711568", ext: "1177" },
  { name: "Junction 13 Used Car Sales Ltd", cat: "Logistics & Motoring", loc: "Log Cabin 17A", door: "73", kw: "Used car sales", tel: "07587915527" },
  { name: "Kalsi Plastics Ltd", cat: "Engineering & Manufacturing", loc: "Log Cabin 7A", door: "37", tel: "07799 861 922" },
  { name: "Kinetic Bike Bearings", cat: "Retail & Trade", loc: "Lodge 10A", door: "43", contact: "Craig Binns", tel: "01785 605863", ext: "1147", web: "kineticbikebearings.com" },
  { name: "Kite Consulting LLP", cat: "Professional Services", loc: "Lodge 6A, The Rabbit Hole", door: "35", contact: "Nicky Morrison", tel: "01902 851007", ext: "1108" },
  { name: "KROWL", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Robert Paul Wellings", tel: "01889 574182" },
  { name: "KS Construction Ltd", cat: "Property & Construction", loc: "Barn 7, Offices C1 and C8", door: "North Entrance, First Floor, Block C", kw: "Masonry contractors, groundworks, civil engineering", contact: "Soloman Kidd-smithers", tel: "01782 939 038", web: "ksconstruction.group" },
  { name: "L123 Limited T/a VeriServ", cat: "Professional Services", loc: "Barn 4, First Floor, Office E", door: "15", contact: "Patricia Pitt", tel: "01543414152" },
  { name: "LA Beauty & Aesthetix Ltd", cat: "Beauty & Aesthetics", loc: "Log Cabin 5A, Hedgehog Hollow", door: "33", kw: "Aesthetics, beautician, piercings", tel: "07903999817" },
  { name: "Leggy Design House Limited", cat: "Creative & Media", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Heather Yerlett" },
  { name: "Libertas 2 Ltd Complete Outsource", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Mr Glyn Rowley", tel: "07742015555" },
  { name: "Lonsdale Wealth Management", cat: "Finance & Wealth", loc: "Lodge 12B, Butterfly House", door: "48", kw: "Independent financial advisor, financial services, financial planning, pension advice, investment planning, estate planning", contact: "Neil Homer", tel: "01785 711578", ext: "1202", web: "lonsdaleservices.co.uk" },
  { name: "Mister K Ltd", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Jabin King", tel: "07835404895" },
  { name: "MJM Designs & Draughting Ltd", cat: "Engineering & Manufacturing", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, kw: "3D scanning, reverse engineering", contact: "Mark Mason", tel: "01785 526044" },
  { name: "Mohammed Younes", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Mohammed Younes", tel: "07766521760" },
  { name: "Mortar & Screed", cat: "Property & Construction", loc: "Barn 1B", door: "4", kw: "Mortar, render, ready-to-use, mason mix, concrete", contact: "Phil Padfield", tel: "01543 629009" },
  { name: "Nano Clean Water Limited", cat: "Environmental & Energy", loc: "Barn 4, Office C3", door: "21", kw: "Water quality checks, pool test kits, water quality test kits, contamination control, cleanrooms, controlled environment, qualification testing", contact: "Martin Hazlewood", tel: "03333 051017" },
  { name: "Niche Interiors Limited", cat: "Property & Construction", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Garvin Wardle", tel: "07549 706129" },
  { name: "Onsite Driveways", cat: "Property & Construction", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "William Thompson", tel: "07787426085" },
  { name: "Onyx Hardware Ltd", cat: "Retail & Trade", loc: "Log Cabin 14", door: "51, 52", contact: "Gary Sangha", tel: "07710974680" },
  { name: "Orenna", cat: "Health & Wellbeing", loc: "Barn 3 North", door: "20", kw: "Psychotherapy, counselling", contact: "Verity Smith", tel: "07557880882", ext: "1420" },
  { name: "Papa Delux Ltd", cat: "Retail & Trade", loc: "Barn 8, Office A, First Floor", door: "17", kw: "UK-based clothing brand and menswear company specialising in luxury apparel, performance wear and vintage collections", contact: "Darcy Readman-Smith", tel: "07544466148", web: "papadeluxe.co.uk" },
  { name: "Print Works Direct", cat: "Technology", loc: "Log Cabins 29 and 30, Rear Car Park", door: "84 to 87", kw: "IT hardware, furniture", contact: "Daniel Wheway", tel: "0808 169 8128", web: "pwdsupplies.co.uk" },
  { name: "R4NK1N", cat: "Creative & Media", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "John Rankin", tel: "07838391234" },
  { name: "Ramm Sanderson Ecology Ltd", cat: "Environmental & Energy", loc: "Barn 7, 1st Floor, Office D", door: "Barn 7 North", kw: "Ecology, environmental, surveys", contact: "Anthony Mellor", tel: "01785 562416" },
  { name: "Reflective School Support", cat: "Education", loc: "Log Cabin 8", door: "39, 40", kw: "Home tuition, school support", contact: "Deb Barnes", tel: "07340050235", web: "reflectiveschoolsupport.co.uk" },
  { name: "Resiaction Ltd", cat: "Professional Services", loc: "Barn 7", door: "North Entrance", contact: "Mrs Helan Vershole", tel: "07985324337" },
  { name: "Revolve Collective", cat: "Recruitment & Training", loc: "Barn 8, Offices 7A/7B", door: "No. 19, Side Entrance", kw: "Recruitment, relational support, training", contact: "Sara Taylor", tel: "01785450400", web: "revolvecollective.org" },
  { name: "Rokholt Acquisitions Ltd", cat: "Property & Construction", loc: "Log Cabins 31–33, Rear Car Park", door: "88–93", contact: "Simon Chorley", tel: "0333 011 2433" },
  { name: "RPS Environmental Management Ltd", cat: "Environmental & Energy", loc: "Log Cabin 4C", door: "31 & 32", contact: "Stephen Postians", tel: "01785 711571", ext: "1130" },
  { name: "Shropshire Asbestos Services", cat: "Property & Construction", loc: "Lodge 7B", door: "38", contact: "Stuart Groves", tel: "07472852100", ext: "1143" },
  { name: "SmartPlaz", cat: "Technology", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Max Copestake" },
  { name: "Smartzi", cat: "Technology", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Chaenthen Balasundaram" },
  { name: "Snag R Software Ltd", cat: "Technology", loc: "Log Cabin 21", door: "66, 67", contact: "Ed Englefield", tel: "07376202710" },
  { name: "Stafford Lettings", cat: "Property & Construction", loc: "Reception, Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Pam Maclaughlin", tel: "01785 711 611" },
  { name: "Stamps4U", cat: "Retail & Trade", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Ian Bradbee", tel: "07885681450" },
  { name: "Stark Wayne LTD (Be Media) / Crafty Boys", cat: "Creative & Media", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Simon Belcher", tel: "01543547575" },
  { name: "Taker Splash Ltd / Turtle Tots Staffordshire", cat: "Health & Wellbeing", loc: "Barn 2B", door: "7, 8", kw: "Swimming lessons, baby, toddler", contact: "Ms. Sam Taker", tel: "07550040669" },
  { name: "Target Fire Systems", cat: "Property & Construction", loc: "Log Cabin 3", door: "29, 30 and Side Door", contact: "Shaun Ellsmore", tel: "01785 450279", ext: "1145", web: "targetfiresystems.co.uk" },
  { name: "The Clay Partnership Ltd", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Daniel Martin", tel: "07584228874" },
  { name: "The Courtyard Bar and Restaurant", cat: "Food & Hospitality", loc: "Next door to Barn 4 and Barn 7", door: "Public entrance through the courtyard", kw: "Bar, cafe, restaurant, events, music, comedy, food, beer, sandwiches, takeaway, eat-in, wine, weddings", contact: "Adrian or Pam Maclaughlin", tel: "01785 450555", web: "order.toasttab.com/online/courtyardbarandrestaurant", webLabel: "Order online" },
  { name: "The Essential Training Company", cat: "Recruitment & Training", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Trudie McGuinness", tel: "07780003798" },
  { name: "The Haven School", cat: "Education", loc: "Log Cabins 24–27, Rear Car Park", door: "Side Entrance, Cabin 26", kw: "Teaching, learning, independent special school, EHCP, education", contact: "Jane Spensley", tel: "01785450261", web: "thehavenschool.com" },
  { name: "The Honeycomb Foundation", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Nicki Haywood", tel: "07977 728289" },
  { name: "Thruwall Cladding And Fire Consultants Ltd", cat: "Property & Construction", loc: "Log Cabin 28, Rear Car Park", door: "82, 83", contact: "Luke Cresswell", tel: "01785 550 099", ext: "1144" },
  { name: "Utility Massage", cat: "Health & Wellbeing", loc: "Barn 7, Office 5", door: "", kw: "Therapeutic full body sports massage" },
  { name: "Venue Catering Partner Ltd", cat: "Food & Hospitality", loc: "Log Cabin 22A", door: "68", tel: "01782 816394", ext: "1204" },
  { name: "Vestey Foods UK Ltd", cat: "Food & Hospitality", loc: "Log Cabin 23/22B", door: "70, 71", kw: "Global sourcing, processing and distribution of food for over 120 years", tel: "01217269223" },
  { name: "Viris Brand", cat: "Creative & Media", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Andrew Ward", tel: "07788 556160" },
  { name: "Vision Survey", cat: "Property & Construction", loc: "Barn 4C, Office C3", door: "21, Ground Floor", contact: "John Arundell", tel: "01293223435", ext: "1153" },
  { name: "Wealth Design", cat: "Finance & Wealth", loc: "Lodge 6B", door: "36", kw: "Independent financial advisor, financial services, financial planning, pension advice, savings planning, school fees planning", tel: "01543571238", web: "wealthdesign.co.uk" },
  { name: "WEC Laser", cat: "Engineering & Manufacturing", loc: "Barn 3, Office 1B", door: "11", contact: "Stephen Busby", tel: "01785 711643", ext: "1203" },
  { name: "Willowsbrook Limited", cat: "Professional Services", loc: "Barn 7, Office C4, 1st Floor", door: "", tel: "07598490515" },
  { name: "Xion Group", cat: "Professional Services", loc: "Woodland Lodge, Log Cabin 20", door: "64", reception: true, contact: "Davinia Sherlock", tel: "07814409776" }
];
