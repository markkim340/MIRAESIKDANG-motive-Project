-- migrate:up
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (1,1,43745,'중구 한강대로','서울스퀘어','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (2,1,24623,'종로구 종로','종로타워','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (3,2,43734,'강남구 테헤란로','역삼역','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (4,2,47256,'종로구 종로1길','광화문','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (5,3,73456,'영등포구 의사당대로','여의도역','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (6,3,24135,'중구 삼일대로','을지로','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (7,4,24547,'강남구 대치동','선릉역','2022-09-06 22:16:38');
INSERT INTO `address` (`id`,`user_id`,`postal_code`,`address`,`address1`,`created_at`) VALUES (8,5,36276,'마포구 양화로','홍대','2022-09-06 22:16:38');


-- migrate:down

