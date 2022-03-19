
/* 1. Those that survived*/

SELECT  count(s.survival_status) FROM survival_table s WHERE s.survival_status = 1
/* The number is: 342 */

/* 2. Those that did not survive*/

SELECT  count(s.survival_status) FROM survival_table s WHERE s.survival_status = 0
/* The number of those that did not survive is:  549*/


/* 3. name and sex of passengers < 27 && embarked @ Q && C  */

SELECT  distinct p.full_name,p.sex, t.embarkation_point FROM passengers_table p INNER JOIN trips_table t ON t.passenger_id = p.passenger_id WHERE p.age < 27
AND t.embarkation_point IN ('Q','C');
/*

full_name,sex,embarkation_point
"Moran, Mr. James",male,Q
"Nasser, Mrs. Nicholas (Adele Achem)",female,C
"Rice, Master. Eugene",male,Q
"Masselmani, Mrs. Fatima",female,C
"McGowan, Miss. Anna "Annie"""",female,Q
"Emir, Mr. Farred Chehab",male,C
"O'Dwyer, Miss. Ellen "Nellie"""",female,Q
"Spencer, Mrs. William Augustus (Marie Eugenie)",female,C
"Glynn, Miss. Mary Agatha",female,Q
"Mamee, Mr. Hanna",male,C
"Nicola-Yarred, Miss. Jamila",female,C
"Kraeff, Mr. Theodor",male,C
"Laroche, Miss. Simonne Marie Anne Andree",female,C
"Devaney, Miss. Margaret Delia",female,Q
"Lennon, Mr. Denis",male,Q
"O'Driscoll, Miss. Bridget",female,Q
"Samaan, Mr. Youssef",male,C
"Sirayanian, Mr. Orsen",male,C
"Stewart, Mr. Albert A",male,C
"Moubarek, Master. Gerios",male,C
"Chronopoulos, Mr. Apostolos",male,C
"McDermott, Miss. Brigdet Delia",female,Q
"Greenfield, Mr. William Bertram",male,C
"Moran, Miss. Bertha",female,Q
"Zabour, Miss. Hileni",female,C
"Attalah, Miss. Malake",female,C
"Baxter, Mr. Quigg Edmond",male,C
"Nicola-Yarred, Master. Elias",male,C
"McMahon, Mr. Martin",male,Q
"Peter, Miss. Anna",female,C
"Richard, Mr. Emile",male,C
"Giglio, Mr. Victor",male,C
"Boulos, Mrs. Joseph (Sultana)",female,C
"Burke, Mr. Jeremiah",male,Q
"Gilnagh, Miss. Katherine "Katie"""",female,Q
"Rice, Master. Arthur",male,Q
"Pernot, Mr. Rene",male,C
"O'Brien, Mrs. Thomas (Johanna "Hannah"" Godfrey)"",female,Q
"Mernagh, Mr. Robert",male,Q
"Madigan, Miss. Margaret "Maggie"""",female,Q
"Albimona, Mr. Nassef Cassem",male,C
"Carr, Miss. Helen "Ellen"""",female,Q
"Kiernan, Mr. Philip",male,Q
"Zabour, Miss. Thamine",female,C
"Murphy, Miss. Katherine "Kate"""",female,Q
"Thorne, Mrs. Gertrude Maybelle",female,C
"Smith, Mr. Thomas",male,Q
"Henry, Miss. Delia",female,Q
"Healy, Miss. Hanora "Nora"""",female,Q
"Rice, Master. Eric",male,Q
"Connolly, Miss. Kate",female,Q
"Bishop, Mrs. Dickinson H (Helen Walton)",female,C
"Lewy, Mr. Ervin G",male,C
"Hanna, Mr. Mansour",male,C
"Kelly, Miss. Anna Katherine "Annie Kate"""",female,Q
"McCoy, Mr. Bernard",male,Q
"Keane, Miss. Nora A",female,Q
"Fleming, Miss. Margaret",female,C
"Penasco y Castellana, Mrs. Victor de Satode (Maria Josefa Perez de Soto y Vallejo)",female,C
"Hays, Miss. Margaret Bechstein",female,C
"Ryerson, Miss. Emily Borie",female,C
"Hippach, Miss. Jean Gertrude",female,C
"McCoy, Miss. Agnes",female,Q
"Elias, Mr. Tannous",male,C
"Yousif, Mr. Wazli",male,C
"McGovern, Miss. Mary",female,Q
"Mockler, Miss. Helen Mary "Ellie"""",female,Q
"O'Brien, Mr. Thomas",male,Q
"Moussa, Mrs. (Mantoura Boulos)",female,C
"Jermyn, Miss. Annie",female,Q
"Aubart, Mme. Leontine Pauline",female,C
"Harder, Mr. George Achilles",male,C
"Ringhini, Mr. Sante",male,C
"Meyer, Mrs. Edgar Joseph (Leila Saks)",female,C
"Betros, Mr. Tannous",male,C
"Nakid, Miss. Maria ("Mary"")"",female,C
"Sadlier, Mr. Matthew",male,Q
"Lehmann, Miss. Bertha",female,C
"Newell, Miss. Marjorie",female,C
"Hart, Mr. Henry",male,Q
"Gheorgheff, Mr. Stanio",male,C
"Charters, Mr. David",male,Q
"Flynn, Mr. James",male,Q
"Baclini, Miss. Marie Catherine",female,C
"O'Connor, Mr. Maurice",male,Q
"Scanlan, Mr. James",male,Q
"Baclini, Miss. Helene Barbara",female,C
"Jerwan, Mrs. Amin S (Marie Marthe Thuillard)",female,C
"Bishop, Mr. Dickinson H",male,C
"Yousseff, Mr. Gerious",male,C
"Canavan, Miss. Mary",female,Q
"O'Sullivan, Miss. Bridget Mary",female,Q
"Penasco y Castellana, Mr. Victor de Satode",male,C
"Ryan, Mr. Patrick",male,Q
"Lahoud, Mr. Sarkis",male,C
"Kassem, Mr. Fared",male,C
"Toufik, Mr. Nakli",male,C
"Elias, Mr. Joseph Jr",male,C
"Peter, Mrs. Catherine (Catherine Rizk)",female,C
"Frolicher, Miss. Hedwig Margaritha",female,C
"Padro y Manent, Mr. Julian",male,C
"Thayer, Mr. John Borland Jr",male,C
"O'Brien, Mr. Timothy",male,Q
"Leeni, Mr. Fahim ("Philip Zenni"")"",male,C
"Robbins, Mr. Victor",male,C
"Morrow, Mr. Thomas Rowan",male,Q
"Doharr, Mr. Tannous",male,C
"Kelly, Miss. Mary",female,Q
"Caram, Mrs. Joseph (Maria Elias)",female,C
"Paulner, Mr. Uscher",male,C
"Bourke, Miss. Mary",female,Q
"Boulos, Mr. Hanna",male,C
"Laroche, Mrs. Joseph (Juliette Marie Louise Lafargue)",female,C
"Murphy, Miss. Margaret Jane",female,Q
"Horgan, Mr. John",male,Q
"Nakid, Mr. Sahid",male,C
"O'Connell, Mr. Patrick D",male,Q
"Sagesser, Mlle. Emma",female,C
"Baclini, Miss. Eugenie",female,C
"O'Leary, Miss. Hanora "Norah"""",female,Q
"Hegarty, Miss. Hanora "Nora"""",female,Q
"Peters, Miss. Katie",female,Q
"Laroche, Mr. Joseph Philippe Lemercier",male,C
"Karun, Miss. Manca",female,C
"Saad, Mr. Khalil",male,C
"Mullens, Miss. Katherine "Katie"""",female,Q
"Astor, Mrs. John Jacob (Madeleine Talmadge Force)",female,C
"Barbara, Miss. Saiide",female,C
"Gallagher, Mr. Martin",male,Q
"Moubarek, Master. Halim Gonios ("William George"")"",male,C
"Mayne, Mlle. Berthe Antonine ("Mrs de Villiers"")"",female,C
"McEvoy, Mr. Michael",male,Q
"Mannion, Miss. Margareth",female,Q
"Hassan, Mr. Houssein G N",male,C
"Ryerson, Miss. Susan Parker "Suzette"""",female,C
"Barah, Mr. Hanna Assi",male,C
"Brewe, Dr. Arthur Jackson",male,C
"Moran, Mr. Daniel J",male,Q
"Elias, Mr. Dibo",male,C
"Tobin, Mr. Roger",male,Q
"Kilgannon, Mr. Thomas J",male,Q
"Ayoub, Miss. Banoura",female,C
"Rice, Master. George Hugh",male,Q
"Keane, Mr. Andrew "Andy"""",male,Q
"Hoyt, Mr. William Fisher",male,C
"Thomas, Master. Assad Alexander",male,C
"Flynn, Mr. John",male,Q
"Mallet, Master. Andre",male,C
"McCormack, Mr. Thomas Joseph",male,Q
"Yasbeck, Mrs. Antoni (Selini Alexander)",female,C
"Saad, Mr. Amin",male,C
"Marechal, Mr. Pierre",male,C
"Goldenberg, Mrs. Samuel L (Edwiga Grabowska)",female,C
"Boulos, Miss. Nourelain",female,C
"Baclini, Mrs. Solomon (Latifa Qurban)",female,C
"Razi, Mr. Raihed",male,C
"Najib, Miss. Adele Kiamie "Jane"""",female,C
"Behr, Mr. Karl Howell",male,C


They are 158 in total

*/


/*  4. Those that embarked at Southampton  */

SELECT COUNT(s.survival_status) FROM survival_table s INNER JOIN trips_table t ON 
t.passenger_id = s.passenger_id WHERE s.survival_status = 1 AND t.embarkatiON_point = 'S'

/*  Those that embarked at Southampton = 218  */



/* 5. id and names of passsengers who paid > 100  */

SELECT p.passenger_id, p.full_name  FROM passengers_table p
INNER JOIN trips_table t ON t.passenger_id = p.passenger_id WHERE 
t.fare >100 AND p.age > 35 
AND t.num_of_siblings_or_spouses > 0

/*
passenger_id	full_name
320	Spedden, Mrs. Frederic Oakley (Margaretta Corning Stone)
391	Carter, Mr. William Ernest
439	Fortune, Mr. Mark
545	Douglas, Mr. Walter Donald
582	Thayer, Mrs. John Borland (Marian Longstreth Morris)
661	Frauenthal, Dr. Henry William
699	Thayer, Mr. John Borland
764	Carter, Mrs. William Ernest (Lucile Polk)
857	Wick, Mrs. George Dennick (Mary Hitchcock)

They are 9 in total and Yes they did have spouses or siblings
*/
