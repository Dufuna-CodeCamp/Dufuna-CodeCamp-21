


/* 1. Number of people who survived   */
SELECT  count(s.survival_status) FROM survival_table s WHERE s.survival_status = 1

/*Number of survivors = 290   */


/* 2. Number of people who did not survived   */
SELECT  COUNT(s.survival_status) FROM survival_table s WHERE s.survival_status = 0

/*Number of passengers that did not survive = 424   */


/*3. Those who were <27 and embarked at Queenstown, I could not get those that embarked and Q and C in the same query because they are all in the same column  */

SELECT p.full_name, p.sex, t.embarkatiON_point FROM passengers_table p INNER JOIN trip_table t ON t.passenger_id = p.id WHERE p.age < 27
AND t.embarkatiON_point = 'Q' 

/*  Results

ull_name,sex,embarkatiON_point
"Rice, Master. Eugene",male,Q
"McGowan, Miss. Anna "Annie"""",female,Q
"Devaney, Miss. Margaret Delia",female,Q
"Burke, Mr. Jeremiah",male,Q
"Gilnagh, Miss. Katherine "Katie"""",female,Q
"Rice, Master. Arthur",male,Q
"Carr, Miss. Helen "Ellen"""",female,Q
"Rice, Master. Eric",male,Q
"CONnolly, Miss. Kate",female,Q
"Charters, Mr. David",male,Q
"Canavan, Miss. Mary",female,Q
"Hegarty, Miss. Hanora "Nora"""",female,Q
"Gallagher, Mr. Martin",male,Q
"Rice, Master. George Hugh",male,Q

Total number is: 14
 */

/* 3. Those who were <27 and embarked at Cherburg , I could not get those that embarked and Q and C in the same query because they are all in the same column */

SELECT p.full_name, p.sex, t.embarkatiON_point FROM passengers_table p INNER JOIN trip_table t ON t.passenger_id = p.id WHERE p.age < 27
AND t.embarkatiON_point = 'C'  


/*  Results

full_name,sex,embarkatiON_point
"Nasser, Mrs. Nicholas (Adele Achem)",female,C
"Nicola-Yarred, Miss. Jamila",female,C
"Laroche, Miss. SimONne Marie Anne ANDree",female,C
"Sirayanian, Mr. Orsen",male,C
"ChrONopoulos, Mr. Apostolos",male,C
"Greenfield, Mr. William Bertram",male,C
"Zabour, Miss. Hileni",female,C
"Attalah, Miss. Malake",female,C
"Baxter, Mr. Quigg EdmONd",male,C
"Nicola-Yarred, Master. Elias",male,C
"Richard, Mr. Emile",male,C
"Giglio, Mr. Victor",male,C
"AlbimONa, Mr. Nassef Cassem",male,C
"Bishop, Mrs. DickinsON H (Helen WaltON)",female,C
"Hanna, Mr. Mansour",male,C
"Penasco y Castellana, Mrs. Victor de Satode (Maria Josefa Perez de Soto y Vallejo)",female,C
"Hays, Miss. Margaret Bechstein",female,C
"RyersON, Miss. Emily Borie",female,C
"Hippach, Miss. Jean Gertrude",female,C
"Elias, Mr. Tannous",male,C
"Aubart, Mme. LeONtine Pauline",female,C
"Harder, Mr. George Achilles",male,C
"Ringhini, Mr. Sante",male,C
"Betros, Mr. Tannous",male,C
"Nakid, Miss. Maria ("Mary"")"",female,C
"Lehmann, Miss. Bertha",female,C
"Newell, Miss. Marjorie",female,C
"Baclini, Miss. Marie Catherine",female,C
"Baclini, Miss. Helene Barbara",female,C
"Jerwan, Mrs. Amin S (Marie Marthe Thuillard)",female,C
"Bishop, Mr. DickinsON H",male,C
"Penasco y Castellana, Mr. Victor de Satode",male,C
"Elias, Mr. Joseph Jr",male,C
"Frolicher, Miss. Hedwig Margaritha",female,C
"Thayer, Mr. John BorlAND Jr",male,C
"Leeni, Mr. Fahim ("Philip Zenni"")"",male,C
"Laroche, Mrs. Joseph (Juliette Marie Louise Lafargue)",female,C
"Nakid, Mr. Sahid",male,C
"Sagesser, Mlle. Emma",female,C
"Baclini, Miss. Eugenie",female,C
"Laroche, Mr. Joseph Philippe Lemercier",male,C
"Karun, Miss. Manca",female,C
"Saad, Mr. Khalil",male,C
"Astor, Mrs. John Jacob (Madeleine Talmadge Force)",female,C
"Barbara, Miss. Saiide",female,C
"Mayne, Mlle. Berthe AntONine ("Mrs de Villiers"")"",female,C
"Hassan, Mr. Houssein G N",male,C
"RyersON, Miss. Susan Parker "Suzette"""",female,C
"Barah, Mr. Hanna Assi",male,C
"Ayoub, Miss. Banoura",female,C
"Thomas, Master. Assad AlexANDer",male,C
"Mallet, Master. ANDre",male,C
"Yasbeck, Mrs. AntONi (Selini AlexANDer)",female,C
"Boulos, Miss. Nourelain",female,C
"Baclini, Mrs. SolomON (Latifa Qurban)",female,C
"Najib, Miss. Adele Kiamie "Jane"""",female,C
"Behr, Mr. Karl Howell",male,C

Total number is: 57

 */




/*  4. Those that embarked at Southampton  */
SELECT COUNT(s.survival_status) FROM survival_table s INNER JOIN trip_table t ON 
t.passenger_id = s.passenger_id WHERE s.survival_status = 1 AND t.embarkatiON_point = 'S'

/*  Those that embarked at Southampton = 202  */



/* 5. id and names of passsengers who paid > 100  */
SELECT p.id, p.full_name  FROM passengers_table p
INNER JOIN trip_table t ON t.passenger_id = p.id WHERE 
t.trip_fare >100 AND p.age > 35 
AND t.num_of_siblings_or_spouces > 0

/*  Results here

id,full_name
320,"Spedden, Mrs. Frederic Oakley (Margaretta Corning Stone)"
391,"Carter, Mr. William Ernest"
439,"Fortune, Mr. Mark"
545,"Douglas, Mr. Walter Donald"
582,"Thayer, Mrs. John Borland (Marian Longstreth Morris)"
661,"Frauenthal, Dr. Henry William"
699,"Thayer, Mr. John Borland"
764,"Carter, Mrs. William Ernest (Lucile Polk)"
857,"Wick, Mrs. George Dennick (Mary Hitchcock)"
*/

/* 5. id and names of passsengers who paid > 100: Yes they had siblings/spouses */


