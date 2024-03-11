class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 1
        self.totalPages = (len(items) + self.pageSize - 1) // self.pageSize

    def getVisibleItems(self):
        start_index = (self.currentPage - 1) * self.pageSize
        end_index = start_index + self.pageSize
        visible_items = self.items[start_index:end_index]
        print(visible_items)
        return self

    def prevPage(self):
        self.currentPage = max(1, self.currentPage - 1)
        return self

    def nextPage(self):
        self.currentPage = min(self.totalPages, self.currentPage + 1)
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        self.currentPage = max(1, min(pageNum, self.totalPages))
        return self

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

p.getVisibleItems() 
p.nextPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
