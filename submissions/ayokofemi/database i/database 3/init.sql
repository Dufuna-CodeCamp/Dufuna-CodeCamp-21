USE transportation_company;
SHOW TABLES;

-- number of pax who survived
SELECT Count (*) FROM accident_status WHERE status =1;
-- 342

-- number of pax who did not survived
SELECT Count(*) FROM accident_status WHERE status =0;
-- 549

-- name and sex of those under 27 who embark on Queenstown and Cherbourg
SELECT registered_passenger.full_name, registered_passenger.sex FROM 
registered_passenger INNER JOIN record_detail ON registered_passenger.id = 
record_detail.id WHERE registered_passenger.age < 27 AND 
record_detail.point_of_embarkation = "Q" || record_detail.point_of_embarkation = "C";

-- how many passenger that embark on southampton survived
SELECT Count(record_detail.point_of_embarkation) FROM record_detail INNER JOIN accident_status ON 
accident_status.id=record_detail.id WHERE accident_status.status = 1 AND
 record_detail.point_of_embarkation = "S"; 
--  218

-- id, names & total number of pax who paid > $100 and above age 35 who has siblings or spouses on board
SELECT registered_passenger.id, registered_passenger.full_name FROM registered_passenger INNER JOIN
 record_detail ON registered_passenger.id=record_detail.id WHERE record_detail.trip_fare > 100 AND 
 registered_passenger.age > 35  and record_detail.number_of_siblings_spouses_abroad = 1;
 
1	Braund, Mr. Owen Harris
7	McCarthy, Mr. Timothy J
9	Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)
14	Andersson, Mr. Anders Johan
21	Fynney, Mr. Joseph J
27	Emir, Mr. Farred Chehab
30	Todoroff, Mr. Lalio
31	Uruchurtu, Don. Manuel E
32	Spencer, Mrs. William Augustus (Marie Eugenie)
35	Meyer, Mr. Edgar Joseph
38	Cann, Mr. Ernest Charles
40	Nicola-Yarred, Miss. Jamila
46	Rogers, Mr. William John
48	O'Driscoll, Miss. Bridget
51	Panula, Master. Juha Niilo
63	Harris, Mr. Henry Birkhardt
70	Kink, Mr. Vincenz
80	Dowdell, Miss. Elizabeth
82	Sheerlinck, Mr. Jan Baptist
84	Carrau, Mr. Francisco M
87	Ford, Mr. William Neal
89	Fortune, Miss. Mabel Helen
92	Andreasson, Mr. Paul Edvin
94	Dean, Mr. Bertram Frank
97	Goldschmidt, Mr. George B
99	Doling, Mrs. John T (Ada Julia Bone)
108	Moss, Mr. Albert Johan
117	Connors, Mr. Patrick
121	Hickman, Mr. Stanley George
123	Nasser, Mr. Nicholas
130	Ekstrom, Mr. Johan
132	Coelho, Mr. Domingos Fernandeo
136	Richard, Mr. Emile
137	Newsom, Miss. Helen Monypeny
146	Nicholls, Mr. Joseph Charles
151	Bateman, Rev. Robert James
152	Pears, Mrs. Thomas (Edith Wearne)
153	Meo, Mr. Alfonzo
158	Corn, Mr. Harry
161	Cribb, Mr. John Hatfield
165	Panula, Master. Eino Viljami
167	Chibnall, Mrs. (Edith Martha Bowerman)
168	Skoog, Mrs. William (Anna Bernhardina Karlsson)
173	Johnson, Miss. Eleanor Ileen
174	Sivola, Mr. Antti Wilhelm
176	Klasen, Mr. Klas Albin
184	Becker, Master. Richard F
188	Romaine, Mr. Charles Hallace ("Mr C Rolmane"")"
192	Carbines, Mr. William
206	Strom, Miss. Telma Matilda
210	Blank, Mr. Henry
215	Kiernan, Mr. Philip
218	Jacobsohn, Mr. Sidney Samuel
221	Sunderland, Mr. Victor Francis
223	Green, Mr. George Henry
224	Nenkoff, Mr. Christo
227	Mellors, Mr. William John
230	Lefebre, Miss. Mathilde
236	Harknett, Miss. Alice Phoebe
237	Hold, Mr. Stephen
240	Hunt, Mr. George Henry
247	Lindahl, Miss. Agda Thorilda Viktoria
251	Reed, Mr. James George
252	Strom, Mrs. Wilhelm (Elna Matilda Persson)
259	Ward, Miss. Anna
261	Smith, Mr. Thomas
262	Asplund, Master. Edvin Rojj Felix
265	Henry, Miss. Delia
266	Reeves, Mr. David
269	Graham, Mrs. William Thompson (Edith Junkins)
273	Mellinger, Mrs. (Elizabeth Anne Maidment)
277	Lindblom, Miss. Augusta Charlotta
280	Abbott, Mrs. Stanton (Rosa Hunt)
287	de Mulder, Mr. Theodore
289	Hosono, Mr. Masabumi
291	Barber, Miss. Ellen "Nellie"""
296	Lewy, Mr. Ervin G
299	Saalfeld, Mr. Adolphe
305	Williams, Mr. Howard Hugh "Harry"""
306	Allison, Master. Hudson Trevor
307	Fleming, Miss. Margaret
311	Hays, Miss. Margaret Bechstein
312	Ryerson, Miss. Emily Borie
313	Lahtinen, Mrs. William (Anna Sylfven)
315	Hart, Mr. Benjamin
317	Kantor, Mrs. Sinai (Miriam Sternin)
325	Sage, Mr. George John Jr
327	Nysveen, Mr. Johan Hansen
330	Hippach, Miss. Jean Gertrude
344	Sedgwick, Mr. Charles Frederick Waddington
345	Fox, Mr. Stanley Hubert
350	Dimic, Mr. Jovan
352	Williams-Lambert, Mr. Fletcher Fellows
354	Arnold-Franchi, Mr. Josef
357	Bowerman, Miss. Elsie Edith
358	Funk, Miss. Annie Clemmer
372	Wiklund, Mr. Jakob Alfred
382	Nakid, Miss. Maria ("Mary"")"
384	Holverson, Mrs. Alexander Oskar (Mary Aline Towner)
392	Jansson, Mr. Carl Olof
394	Newell, Miss. Marjorie
395	Sandstrom, Mrs. Hjalmar (Agnes Charlotta Bengtsson)
402	Adams, Mr. John
403	Jussila, Miss. Mari Aina
404	Hakkarainen, Mr. Pekka Pietari
416	Meek, Mrs. Thomas (Annie Louise Rowley)
417	Drew, Mrs. James Vivian (Lulu Thorne Christian)
418	Silven, Miss. Lyyli Karoliina
419	Matthews, Mr. William John
425	Rosblom, Mr. Viktor Richard
427	Clarke, Mrs. Charles V (Ada Maria Winfield)
429	Flynn, Mr. James
437	Ford, Miss. Doolina Margaret "Daisy"""
440	Kvillner, Mr. Johan Henrik Johannesson
441	Hart, Mrs. Benjamin (Esther Ada Bloomfield)
444	Reynaldo, Ms. Encarnacion
445	Johannesen-Bratthammer, Mr. Bernt
448	Seward, Mr. Frederic Kimber
449	Baclini, Miss. Marie Catherine
450	Peuchen, Major. Arthur Godfrey
465	Maisner, Mr. Simon
478	Braund, Mr. Lewis Richard
486	Lefebre, Miss. Jeannie
487	Hoyt, Mrs. Frederick Maxfield (Jane Anne Forby)
495	Stanley, Mr. Edward Roland
500	Svensson, Mr. Olof
508	Bradley, Mr. George ("George Arthur Brayton"")"
512	Webber, Mr. James
516	Walker, Mr. William Anderson
518	Ryan, Mr. Patrick
526	Farrell, Mr. James
529	Salonen, Mr. Johan Werner
533	Elias, Mr. Joseph Jr
543	Andersson, Miss. Sigrid Elisabeth
544	Beane, Mr. Edward
546	Nicholson, Mr. Arthur Ernest
548	Padro y Manent, Mr. Julian
552	Sharp, Mr. Percival James R
553	O'Brien, Mr. Timothy
560	de Messemaeker, Mrs. Guillaume Joseph (Emma)
562	Sivic, Mr. Husein
565	Meanwell, Miss. (Marion Ogden)
570	Jonsson, Mr. Carl
577	Garside, Miss. Ethel
589	Gilinski, Mr. Eliezer
591	Rintamaki, Mr. Matti
598	Johnson, Mr. Alfred
605	Homer, Mr. Harry ("Mr E Haven"")"
614	Horgan, Mr. John
615	Brocklebank, Mr. William Alfred
628	Longley, Miss. Gretchen Fiske
631	Barkworth, Mr. Algernon Henry Wilson
632	Lundahl, Mr. Johan Svensson
634	Parr, Mr. William Henry Marsh
639	Panula, Mrs. Juha (Maria Emilia Ojala)
644	Foo, Mr. Choong
646	Harper, Mr. Henry Sleeper
