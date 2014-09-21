CREATE TABLE [Todo]
(
    [id] INTEGER  PRIMARY KEY AUTOINCREMENT,
    [title] NVARCHAR(160)  NOT NULL,
    [description] NVARCHAR(300)  NULL,
        [done] INTEGER NOT NULL,
        [creationDate] DATETIME NOT NULL
);

INSERT INTO "Todo" VALUES(1,'Buy a Playstation 4','yes please',1, datetime('now'));
INSERT INTO "Todo" VALUES(2,'Buy The Last of Us','',1,datetime('now'));
INSERT INTO "Todo" VALUES(3,'Pass PHP Cert','',0,datetime('now'));