import win32com.client as win32
powerpoint = win32.gencache.EnsureDispatch('Powerpoint.Application')

powerpoint.Visible = True
_ = input("Press ENTER to quit:")

powerpoint.Application.Quit()


PowerpointFilePath = 'C:\Users\45717\Desktop\Programmering\Skole\Eksamen'
app = win32com.client.Dispatch("PowerPoint.Application")  # Laver objekt der kan håndtere VBA-kald


class ppt:
    def __init__(self):
        self.objCOM = app.Presentations.Open(FileName="PowerpointFilePath", WithWindow=1)

    def advance(self):
        self.objCOM.SlideShowWindow.View.Next()


ppt.advance(self=True)